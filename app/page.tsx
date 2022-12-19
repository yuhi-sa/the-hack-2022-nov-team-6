import Link from 'next/link'
import List from "../components/common/List"
import { getPostsData } from "../lib/notion"

export default async function Home() {
  const posts = await getPostsData()
  if (posts.length === 0) {
    return <p>投稿がありません。</p>
  }

  return (
    <section>
      <h2 className='font-bold text-xl text-center mt-10'>最新の記事</h2>
      <div className='flex flex-col gap-6 mt-8'>
        <List posts={posts} />
        <p className='text-center mt-8'>
          <Link href='about' className='bg-base hover:bg-base/50 text-bg py-2 px-4'>
            記事一覧へ
          </Link>
        </p>
      </div>
    </section>
  )
}
