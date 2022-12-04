import {Client} from '@notionhq/client'

const lbToBr = (txt:string): string => {
  const fixedText = txt.split(/(\n)/g).map(
    t => (t === '\n') ? "<br>": t
  )
  return fixedText.join("")
}

export type Post = {
  id: number
  title: string,
  date: string,
  thumbnail: string,
  category: string,
  text: string
}

export async function getPostsData(): Promise<Post[]> {
  if (process.env.NOTION_ACCESS_TOKEN === undefined || process.env.NOTION_DATABASE_ID === undefined) {
    throw new Error('NOTION_ACCESS_TOKEN or NOTION_DATABASE_ID is not defined')
  }

  const notion = new Client({ auth: process.env.NOTION_ACCESS_TOKEN })
  const response = await notion.databases.query(
    {
      database_id : process.env.NOTION_DATABASE_ID
    }
  )
  const posts = response.results.map( (result:any) => {    
    try {
      const id = result.properties['id'].number
      const title = result.properties['title'].title[0].plain_text
      const date = result.properties['date'].date.start
      const thumbnail = result.properties['thumbnail'].url
      const category = result.properties['category'].multi_select[0].name
      const text = lbToBr(result.properties['text'].rich_text[0].plain_text)
      return{
        id,
        title,
        date,
        thumbnail,
        category,
        text
      } as Post
    } catch(error) {
      console.error(error)
      return undefined
    }
  }).filter(post => post !== undefined) as Post[]
  
  return posts
}