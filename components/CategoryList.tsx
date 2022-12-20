import Link from 'next/link'
import { Post } from '../lib/notion'

const CategoryList = ({ posts }: { posts: Post[] }) => {
  const publishedPosts = posts.filter((post) => post.isPublished)
  const categories = new Set(publishedPosts.map((post) => post.category))
  const categoriesArray = Array.from(categories)
  return (
    <>
      <ul className='space-y-3 marker:text-sky-400 list-disc pl-5 leading-5 mt-4 text-sm'>
        {categoriesArray.map((category) => (
          <li key={category}>
            <Link href='/unimplemented' className='hover:text-link'>
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CategoryList
