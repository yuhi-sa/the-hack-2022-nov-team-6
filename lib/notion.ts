import { Client } from '@notionhq/client'
import { NotionToMarkdown } from 'notion-to-md'

export type Post = {
  postId: number
  title: string,
  isPublished: boolean,
  createdAt: string,
  publishedAt: string,
  thumbnail: string,
  category: string,
  userId: number,
  markdown: string
}

export type User = {
  userId: number,
  twitter: string,
  instagram: boolean,
  name: string,
  icon: string,
  markdown: string
}

const initNotionClient = (): Client => {
  if (
    typeof process.env.NOTION_ACCESS_TOKEN === 'undefined' ||
    typeof process.env.NOTION_USERS_DATABASE_ID === 'undefined'
  ) {
    throw new Error('NOTION_ACCESS_TOKEN or NOTION_USERS_DATABASE_ID is not defined')
  }
  return new Client({ auth: process.env.NOTION_ACCESS_TOKEN })
}

export async function getPostsData(): Promise<Post[]> {
  const notion = initNotionClient()
  const response = await notion.databases.query({ database_id : process.env.NOTION_POSTS_DATABASE_ID as string,
    filter: {
      and: [{
        "property": "is_published",
        "select": {
          "equals": 'true'
        }
      }]
    }})
  const posts = await Promise.all(response.results.map( async (result:any) => {    
    try {
      const postId = result.properties['post_id'].number
      const title = result.properties['title'].title[0].plain_text
      const isPublished = result.properties['is_published'].select.name
      const createdAt = result.properties['created_at'].created_time
      const publishedAt = result.properties['published_at'].date.start
      const thumbnail = result.properties['thumbnail'].url
      const category = result.properties['category'].multi_select[0].name
      const userId = result.properties['user_id'].number
      const markdown = await getMarkdownData(result.id)
      return{
        postId,
        title,
        isPublished,
        createdAt,
        publishedAt,
        thumbnail,
        category,
        userId,
        markdown
      } as Post
    } catch(error) {
      console.error(error)
      return undefined
    }
  })).then(results => results.filter(post => post !== undefined)) as Post[]
  
  return posts
}

export async function getUsersData(): Promise<User[]> {
  const notion = initNotionClient()
  const response = await notion.databases.query({ database_id : process.env.NOTION_USERS_DATABASE_ID as string })
  const users = await Promise.all(response.results.map( async (result:any) => {    
    try {
      const userId = result.properties['user_id'].number
      const twitter = result.properties['twitter'].rich_text[0].plain_text
      const instagram = result.properties['instagram'].rich_text[0].plain_text
      const name = result.properties['name'].title[0].plain_text
      const icon = result.properties['icon'].url
      const markdown = await getMarkdownData(result.id)
      return{
        userId,
        twitter,
        instagram,
        name,
        icon,
        markdown
      } as User
    } catch(error) {
      console.error(error)
      return undefined
    }
  })).then(results => results.filter(user => user !== undefined)) as User[]
  
  return users
}

async function getMarkdownData(id: string): Promise<string> {
  const notion = new Client({ auth: process.env.NOTION_ACCESS_TOKEN })
  const n2m = new NotionToMarkdown({ notionClient: notion })
  const mdblocks = await n2m.pageToMarkdown(id)
  const mdString = n2m.toMarkdownString(mdblocks)
  return mdString
  }
