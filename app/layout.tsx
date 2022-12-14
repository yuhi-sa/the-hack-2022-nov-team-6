import React from 'react'
import { blogConfig } from '../blog.config'
import Header from '../components/common/Header'
import Footer from '../components/common/footer'
import Author from '../components/Author'
import NewArticleList from '../components/NewArticleList'
import CategoryList from '../components/CategoryList'
import TagList from '../components/TagList'
import Search from '../components/Search'
import '../styles/globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body>
        <Header />

        {/* ここから、トップページでのみ表示させる */}
        <div className='hero-image relative'>
          <img
            src='https://picsum.photos/900/600.webp'
            alt='メイン画像'
            className='w-full aspect-[3/2] lg:aspect-[2/1] object-cover'
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
              <Author />
            </div>
            <div className=' bg-white/10 rounded-lg p-6 mt-6'>
              <h2 className='font-bold text-center'>最新の記事</h2>
              <NewArticleList />
            </div>
            <div className='bg-white/10 rounded-lg p-6 mt-6'>
              <h2 className='font-bold text-center'>カテゴリー</h2>
              <CategoryList />
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
