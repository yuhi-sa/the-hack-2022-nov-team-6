import {getPostsData, getUsersData} from '../../lib/notion'

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

        <h1>投稿データ</h1>
        {posts.map((post) =>{
          return <div key={post.post_id}>
              <p>---</p>
              <h1>タイトル：{post.title}</h1>
              <h2>カテゴリ：{post.category}</h2>
              <h2>作成日：{post.created_at}</h2>
              <h2>投稿日：{post.published_at}</h2>
              <img src={post.thumbnail} alt={post.title} width='50px'/>
              <h2>本文</h2>
              <div dangerouslySetInnerHTML={{__html: post.text}} />
            </div>
              
        })}

        <h1>#########################################</h1>
            
        <h1>ユーザデータ</h1>
        {users.map((user)=>{
          return <div key={user.user_id}>
              <h1>ユーザー名：{user.name}</h1>
              <h2>Twitter：{user.twitter}</h2>
              <h2>Instagram：{user.instagram}</h2>
              <img src={user.icon} alt={user.name} width='50px'/>
              <h2>本文</h2>
              <div dangerouslySetInnerHTML={{__html: user.text}} />
            </div>
        })}        
      </>
    )
  } catch(error) {
    console.error(error)
    return <p>エラーが発生しました。</p>
  }
  }
