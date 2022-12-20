import List from "../../components/common/List"
import { getPostsData } from "../../lib/notion"

export default async function Home() {
  const posts = await getPostsData()
  if (posts.length === 0) {
    return <p>投稿がありません。</p>
  }

  return (
    <section>
      <div className='flex flex-col gap-6 mt-8'>
        <List posts={posts} />
      </div>
    </section>
  )
}
