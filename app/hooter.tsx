import Link from 'next/link'
import { blogConfig } from '../../blog.config'

export default function hooter() {
  return (
    <section className='bg-gray-200'>
      <div className='max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8'>
        <nav className='flex flex-wrap justify-center -mx-5 -my-2'>
          <div className='px-5 py-2'>
            <a href='#' className='text-xl leading-6 text-gray-600 hover:text-gray-900'>
              Home
            </a>
          </div>
          <div className='px-5 py-2'>
            <a href='#' className='text-xl leading-6 text-gray-600 hover:text-gray-900'>
              About
            </a>
          </div>
          <div className='px-5 py-2'>
            <a href='#' className='text-lg leading-6 text-gray-600 hover:text-gray-900'>
              記事一覧
            </a>
          </div>
          <div className='px-5 py-2'>
            <Link
              href='../../sample/html-template'
              className='text-lg leading-6 text-gray-600 hover:text-gray-900'
            >
              テンプレート（仮）
            </Link>
          </div>
        </nav>
        <p className='mt-8 text-base leading-6 text-center text-gray-500'>
          <Link href='/'>{blogConfig.copyright}</Link>
        </p>
      </div>
    </section>
  )
}
