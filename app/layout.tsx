import Image from 'next/image'
import { blogConfig } from '../blog.config'
import Author from '../components/Author'
import CategoryList from '../components/CategoryList'
import NewArticleList from '../components/NewArticleList'
import Search from '../components/Search'
import TagList from '../components/TagList'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import '../styles/globals.css'
import { getPostsData, getUsersData } from '../lib/notion'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const posts = await getPostsData()
  const users = await getUsersData()
  return (
    <html>
      <head />
      <body>
        <Header />
        {/* ここから、トップページでのみ表示させる */}
        <div className='hero-image relative'>
          <Image
            src='https://picsum.photos/900/600.webp'
            alt='メイン画像'
            width={800}
            height={600}
            className='w-full aspect-[4/1] md:aspect-[5/1] lg:aspect-[6/1] object-cover'
          />
          <p className='absolute bottom-3 right-0 mx-4 pt-1 px-2 text-white bg-black/40'>
            {blogConfig.blogDetails}
          </p>
        </div>
        {/* ここまで、トップページでのみ表示させる */}

        <div className='flex flex-col lg:flex-row lg:justify-between container lg:max-w-5xl lg:gap-12 px-6 pb-12'>
          <main className='pb-8 w-full'>{children}</main>
          <aside className='lg:basis-72 lg:pt-8'>
            <div className='bg-white/10 p-6 mt-6 rounded-lg'>
              <h2 className='font-bold text-center'>この記事の著者</h2>
              <Author user={users[0]} />
            </div>
            <div className=' bg-white/10 rounded-lg p-6 mt-6'>
              <h2 className='font-bold text-center'>最新の記事</h2>
              <NewArticleList posts={posts} />
            </div>
            <div className='bg-white/10 rounded-lg p-6 mt-6'>
              <h2 className='font-bold text-center'>カテゴリー</h2>
              <CategoryList posts={posts} />
            </div>
            <div className='bg-white/10 rounded-lg p-6 mt-6'>
              <h2 className='font-bold text-center'>タグ</h2>
              <TagList />
            </div>
            <div className='text-center bg-white/10 rounded-lg p-6 mt-6'>
              <h2 className='font-bold'>サイト内検索</h2>
              <Search />
            </div>
          </aside>
        </div>
        <Footer />
      </body>
    </html>
  )
}
