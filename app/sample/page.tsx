import {getPostsData} from '../../lib/notion'

export default async function Sample() {
  try {
    const posts = await getPostsData()
    if (posts.length === 0) {
      return <p>投稿がありません。</p>
    }
    return (
      <>
        <h1>サンプルページです。</h1>
        {posts.map((post) =>{
            return <div key={post.id}>
                <p>---</p>
                <h1>タイトル：{post.title}</h1>
                <h2>カテゴリ：{post.category}</h2>
                <h2>投稿日：{post.date}</h2>
                <img src={post.thumbnail} alt={post.title} />
                <h2>本文</h2>
                <div dangerouslySetInnerHTML={{__html: post.text}} />
                </div>
              
        })}
      </>
    )
  } catch(error) {
    console.error(error)
    return <p>エラーが発生しました。</p>
  }
  }