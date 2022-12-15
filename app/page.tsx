import List from "../components/List";
import { getPostsData } from "../lib/notion";


export default async function Home() {
  const posts = await getPostsData()
  if (posts.length === 0) {
    return <p>投稿がありません。</p>
  }

  return (
    <>
      <List posts={posts} />
    </>
  )
}
