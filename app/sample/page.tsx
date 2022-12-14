import List from '../../components/List'
import { getPostsData, getUsersData } from '../../lib/notion'

export default async function Sample() {
  try {
    const posts = await getPostsData()
    const users = await getUsersData()
    if (posts.length === 0) {
      return <p>投稿がありません。</p>
    }
    return (
      <>
        <h1>後日削除するサンプルページです。</h1>

        <List posts={posts} />

        <h1>#########################################</h1>

        <h1>ユーザデータ</h1>
        {users.map((user)=>{
          return <div key={user.userId}>
              <h1>ユーザー名：{user.name}</h1>
              <h2>Twitter：{user.twitter}</h2>
              <h2>Instagram：{user.instagram}</h2>
              <img src={user.icon} alt={user.name} width='50px' />
              <h2>本文</h2>
              <div dangerouslySetInnerHTML={{ __html: user.markdown }} />
            </div>
        })}
      </>
    )
  } catch (error) {
    console.error(error)
    return <p>エラーが発生しました。</p>
  }
}
