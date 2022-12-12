import { Client } from '@notionhq/client'
import grayMatter from 'gray-matter'
import { marked } from "marked"
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
  htmlText: string
}

export type User = {
  userId: number,
  twitter: string,
  instagram: boolean,
  name: string,
  icon: string,
  htmlText: string
}

export async function getPostsData(): Promise<Post[]> {
  if (
    typeof process.env.NOTION_ACCESS_TOKEN === 'undefined' ||
    typeof process.env.NOTION_POSTS_DATABASE_ID === 'undefined'
  ) {
    throw new Error('NOTION_ACCESS_TOKEN or NOTION_POSTS_DATABASE_ID is not defined')
  }
  const notion = new Client({ auth: process.env.NOTION_ACCESS_TOKEN })
  const response = await notion.databases.query({ database_id : process.env.NOTION_POSTS_DATABASE_ID })
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
      const htmlText = await getTextData(result.id)
      return{
        postId,
        title,
        isPublished,
        createdAt,
        publishedAt,
        thumbnail,
        category,
        userId,
        htmlText
      } as Post
    } catch(error) {
      console.error(error)
      return undefined
    }
  })).then(results => results.filter(post => post !== undefined)) as Post[]
  
  return posts
}

export async function getUsersData(): Promise<User[]> {
  if (
    typeof process.env.NOTION_ACCESS_TOKEN === 'undefined' ||
    typeof process.env.NOTION_USERS_DATABASE_ID === 'undefined'
  ) {
    throw new Error('NOTION_ACCESS_TOKEN or NOTION_USERS_DATABASE_ID is not defined')
  }
  const notion = new Client({ auth: process.env.NOTION_ACCESS_TOKEN })
  const response = await notion.databases.query({ database_id : process.env.NOTION_USERS_DATABASE_ID })
  const users = await Promise.all(response.results.map( async (result:any) => {    
    try {
      const userId = result.properties['user_id'].number
      const twitter = result.properties['twitter'].rich_text[0].plain_text
      const instagram = result.properties['instagram'].rich_text[0].plain_text
      const name = result.properties['name'].title[0].plain_text
      const icon = result.properties['icon'].url
      const htmlText = await getTextData(result.id)
      return{
        userId,
        twitter,
        instagram,
        name,
        icon,
        htmlText
      } as User
    } catch(error) {
      console.error(error)
      return undefined
    }
  })).then(results => results.filter(user => user !== undefined)) as User[]
  
  return users
}

async function getTextData(id: string): Promise<string> {
  const notion = new Client({ auth: process.env.NOTION_ACCESS_TOKEN })
  const n2m = new NotionToMarkdown({ notionClient: notion })
  const mdblocks = await n2m.pageToMarkdown(id)
  const mdString = n2m.toMarkdownString(mdblocks)
  const contents  = grayMatter(mdString)
  const html = marked.parse(contents.content)
  return html
  }
