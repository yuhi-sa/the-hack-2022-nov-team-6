import Image from 'next/image'
import { getPostsData, getUsersData } from '../../lib/notion'

export default async function List() {
  try {
    const posts = await getPostsData()
    if (posts.length === 0) {
      return <p>投稿がありません。</p>
    }
    return (
      <>
        {posts.map((post) =>{
          return (
              <article className='flex gap-3 hover:bg-white/10 lg:p-2' key={post.postId}>
                  <div style={{width: '400px'}}>
                    <h3 className='font-bold'>
                      {post.title}
                    </h3>
                    <p className='text-sm mt-3'>
                      <time dateTime={post.publishedAt} className='mr-4'>
                      {/* {post.publishedAt} */}
                      </time>
                      <span>■ {post.category}</span>
                    </p>
                  </div>
                  <Image
                    src={post.thumbnail}
                    alt='代替画像'
                    width='50'
                    height='50'
                  />
            </article>
        )})}
      </>
    )
  } catch (error) {
    console.error(error)
    return <p>エラーが発生しました。</p>
  }
}
