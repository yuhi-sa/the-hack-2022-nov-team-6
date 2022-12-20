import Link from 'next/link'
import { Post } from '../lib/notion'

const NewArticleList = ({ posts }: { posts: Post[] }) => {
  const publishedPosts = posts.filter((posts) => (posts.isPublished = true))
  const newPosts = publishedPosts.slice(0, 3)
  return (
    <ul className='space-y-3 leading-5 marker:text-sky-400 list-disc pl-5 mt-4 text-sm'>
      {newPosts.map((post) => {
        if (post.isPublished) {
          return (
            <Link href={`posts/${post.postId}`} key={post.postId}>
              <li>{post.title}</li>
            </Link>
          )
        }
      })}
    </ul>
  )
}

export default NewArticleList
