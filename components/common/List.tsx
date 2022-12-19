import { parseISO, format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import { Post } from '../../lib/notion'

export default function List({ posts }: { posts: Post[] }) {
  return (
    <div className='flex flex-col gap-6 mt-8'>
      {posts.map((post) => {
        if (post.isPublished) {
          return (
            <Link href={`posts/${post.postId}`} key={post.postId}>
              <article className='flex justify-between gap-3 lg:hover:bg-white/10 lg:p-2 lg:rounded'>
                <div>
                  <h3 className='lg:text-lg font-bold'>{post.title}</h3>
                  <p className='text-sm mt-3'>
                    <time dateTime={post.publishedAt} className='mr-4'>
                      {format(parseISO(post.publishedAt), 'yyyy年MM月dd日')}
                    </time>
                    <span>■ {post.category}</span>
                  </p>
                </div>
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  width='90'
                  height='60'
                  className='w-1/3 lg:w-1/4 aspect-[3/2] object-cover rounded-lg'
                />
              </article>
            </Link>
          )
        }
      })}
    </div>
  )
}
