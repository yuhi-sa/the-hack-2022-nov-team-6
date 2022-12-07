import { Client } from '@notionhq/client'

export type Post = {
  postId: number
  title: string,
  isPublished: boolean,
  createdAt: string,
  publishedAt: string,
  thumbnail: string,
  category: string,
  userId: number,
  text: string
}

export type User = {
  userId: number,
  twitter: string,
  instagram: boolean,
  name: string,
  icon: string,
  text: string
}

const lbToBr = (txt: string): string => {
  const fixedText = txt.split(/(\n)/g).map((t) => (t === '\n' ? '<br>' : t))
  return fixedText.join('')
}

export async function getPostsData(): Promise<Post[]> {
  if (
    process.env.NOTION_ACCESS_TOKEN === undefined ||
    process.env.NOTION_POSTS_DATABASE_ID === undefined
  ) {
    throw new Error('NOTION_ACCESS_TOKEN or NOTION_POSTS_DATABASE_ID is not defined')
  }
  const notion = new Client({ auth: process.env.NOTION_ACCESS_TOKEN })
  const response = await notion.databases.query({ database_id : process.env.NOTION_POSTS_DATABASE_ID })
  const posts = response.results.map( (result:any) => {    
    try {
      const postId = result.properties['post_id'].number
      const title = result.properties['title'].title[0].plain_text
      const isPublished = result.properties['is_published'].select.name
      const createdAt = result.properties['created_at'].created_time
      const publishedAt = result.properties['published_at'].date.start
      const thumbnail = result.properties['thumbnail'].url
      const category = result.properties['category'].multi_select[0].name
      const userId = result.properties['user_id'].number
      const text = lbToBr(result.properties['text'].rich_text[0].plain_text)
      return{
        postId,
        title,
        isPublished,
        createdAt,
        publishedAt,
        thumbnail,
        category,
        userId,
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
  if (
    process.env.NOTION_ACCESS_TOKEN === undefined ||
    process.env.NOTION_USERS_DATABASE_ID === undefined
  ) {
    throw new Error('NOTION_ACCESS_TOKEN or NOTION_USERS_DATABASE_ID is not defined')
  }
  const notion = new Client({ auth: process.env.NOTION_ACCESS_TOKEN })
  const response = await notion.databases.query({ database_id : process.env.NOTION_USERS_DATABASE_ID })
  const users = response.results.map( (result:any) => {    
    try {
      const userId = result.properties['user_id'].number
      const twitter = result.properties['twitter'].rich_text[0].plain_text
      const instagram = result.properties['instagram'].rich_text[0].plain_text
      const name = result.properties['name'].title[0].plain_text
      const icon = result.properties['icon'].url
      const text = lbToBr(result.properties['text'].rich_text[0].plain_text)
      return{
        userId,
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
