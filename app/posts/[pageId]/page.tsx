import { getPostData } from "../../../lib/notion"

type params = {
  params: {
    pageId: string
  }
}

async function Article(params: params) {
  const post = await getPostData(Number(params.params.pageId))
  return (
    <>
      <div>
        <h3 className='font-bold'>
          {post.title}
        </h3>
        <p className='text-sm mt-3'>
          <time dateTime='2022-12-02T11:30:00.000Z' className='mr-4'>
            {formatDatetime(post.publishedAt)}
          </time>
          <span>■ カテゴリー A</span>
        </p>
      </div>
      <img
        src={post.thumbnail}
        alt='thumbnail'
        className='aspect-[3/2] object-cover rounded-lg'
      />
      <article className="prose  lg:prose-xl prose-stone" dangerouslySetInnerHTML={{ __html: post.html }}>
      </article>
    </>
  )
}

// TODO: postを作成するときからフォーマットしても良いかもしれない
const formatDatetime = (datetime: string) => {
  const date = new Date(datetime);
  const yyyy = `${date.getFullYear()}`;
  // .slice(-2)で文字列中の末尾の2文字を取得する
  // `0${date.getHoge()}`.slice(-2) と書くことで０埋めをする
  const MM = `0${date.getMonth() + 1}`.slice(-2); // getMonth()の返り値は0が基点
  const dd = `0${date.getDate()}`.slice(-2);

  return `${yyyy}年${MM}月${dd}日`;
}

export default Article