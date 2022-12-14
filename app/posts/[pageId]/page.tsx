import { getPostData } from '../../../lib/notion'

type params = {
  params: {
    pageId: string
  }
}

async function Post(params: params) {
  const post = await getPostData(Number(params.params.pageId))
  return (
    <div className='max-w-4xl mx-auto'>
      <div>
        <h3 className='font-bold text-xl text-center mt-10'>{post.title}</h3>
        <div className='meta flex gap-4'>
          <p>{post.publishedAt}</p>
        </div>
      </div>
      <img src={post.thumbnail} alt='thumbnail' className='aspect-[3/2] object-cover rounded-lg' />
      <section
        className='prose lg:prose-xl prose-stone'
        dangerouslySetInnerHTML={{ __html: post.html }}
      ></section>
    </div>
  )
}

export default Post
