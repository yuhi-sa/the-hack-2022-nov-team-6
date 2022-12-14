import { getPostData } from '../../../lib/notion'

type params = {
  params: {
    pageId: string
  }
}

async function Post(params: params) {
  const post = await getPostData(Number(params.params.pageId))
  return (
    <div>
      <div>
        <h3 className='font-bold'>{post.title}</h3>
        <p className='text-sm mt-3'>
          <time dateTime='2022-12-02T11:30:00.000Z' className='mr-4'>
            {post.publishedAt}
          </time>
          <span>■ カテゴリー A</span>
        </p>
      </div>
      <img src={post.thumbnail} alt='thumbnail' className='aspect-[3/2] object-cover rounded-lg' />
      <section
        className='prose  lg:prose-xl prose-stone'
        dangerouslySetInnerHTML={{ __html: post.html }}
      ></section>
    </div>
  )
}

export default Post
