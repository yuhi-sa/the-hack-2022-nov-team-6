import {Client} from '@notionhq/client'

export type Post = {
  post_id: number
  title: string,
  is_published: boolean,
  created_at: string,
  published_at: string,
  thumbnail: string,
  category: string,
  user_id: number,
  text: string
}

export type User = {
  user_id: number,
  twitter: string,
  instagram: boolean,
  name: string,
  icon: string,
  text: string
}

const lbToBr = (txt:string): string => {
  const fixedText = txt.split(/(\n)/g).map(
    t => (t === '\n') ? "<br>": t
  )
  return fixedText.join("")
}

export async function getPostsData(): Promise<Post[]> {
  if (process.env.NOTION_ACCESS_TOKEN === undefined || process.env.NOTION_POSTS_DATABASE_ID === undefined) {
    throw new Error('NOTION_ACCESS_TOKEN or NOTION_POSTS_DATABASE_ID is not defined')
  }
  const notion = new Client({ auth: process.env.NOTION_ACCESS_TOKEN })
  const response = await notion.databases.query({ database_id : process.env.NOTION_POSTS_DATABASE_ID })
  const posts = response.results.map( (result:any) => {    
    try {
      const post_id = result.properties['post_id'].number
      const title = result.properties['title'].title[0].plain_text
      const is_published = result.properties['is_published'].select.name
      const created_at = result.properties['created_at'].created_time
      const published_at = result.properties['published_at'].date.start
      const thumbnail = result.properties['thumbnail'].url
      const category = result.properties['category'].multi_select[0].name
      const user_id = result.properties['user_id'].number
      const text = lbToBr(result.properties['text'].rich_text[0].plain_text)
      return{
        post_id,
        title,
        is_published,
        created_at,
        published_at,
        thumbnail,
        category,
        user_id,
        text
      } as Post
    } catch(error) {
      console.error(error)
      return undefined
    }
  }).filter(post => post !== undefined) as Post[]
  
  return posts
}

export async function getUsersData(): Promise<User[]> {
  if (process.env.NOTION_ACCESS_TOKEN === undefined || process.env.NOTION_USERS_DATABASE_ID === undefined) {
    throw new Error('NOTION_ACCESS_TOKEN or NOTION_USERS_DATABASE_ID is not defined')
  }
  const notion = new Client({ auth: process.env.NOTION_ACCESS_TOKEN })
  const response = await notion.databases.query({ database_id : process.env.NOTION_USERS_DATABASE_ID })
  const users = response.results.map( (result:any) => {    
    try {
      const user_id = result.properties['user_id'].number
      const twitter = result.properties['twitter'].rich_text[0].plain_text
      const instagram = result.properties['instagram'].rich_text[0].plain_text
      const name = result.properties['name'].title[0].plain_text
      const icon = result.properties['icon'].url
      const text = lbToBr(result.properties['text'].rich_text[0].plain_text)
      return{
        user_id,
        twitter,
        instagram,
        name,
        icon,
        text
      } as User
    } catch(error) {
      console.error(error)
      return undefined
    }
  }).filter(user => user !== undefined) as User[]
  
  return users
}
