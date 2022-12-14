import Image from 'next/image'
import { getPostsData } from '../../lib/notion'

export default async function List() {
  try {
    const posts = await getPostsData()
    if (posts.length === 0) {
      return <p>投稿がありません。</p>
    }
    return (
      <div className="max-w-4xl mx-auto">
        {posts.map((post) => {
          if (post.isPublished) {
          return (
              <article className='flex flex-col gap-3 lg:flex-row hover:bg-white/10 lg:p-2' key={post.postId}>
                  <div className='lg:w-3/4'>
                    <h3 className='font-bold'>
                      {post.title}
                    </h3>
                    <p className='text-sm mt-3'>
                      <time dateTime={post.publishedAt} className='mr-4'>
                      {post.publishedAt}
                      </time>
                      <span>■ {post.category}</span>
                    </p>
                  </div>
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    width='50'
                    height='50'
                    className='lg:w-1/4 lg:object-cover lg:object-center'
                  />
            </article>
        )}})}
      </div>
    )
  } catch (error) {
    console.error(error)
    return <p>エラーが発生しました。</p>
  }
}
