import Link from 'next/link'
import { blogConfig } from '../../blog.config'

export default function Footer() {
  return (
    <section className='bg-zinc-800'>
      <div className='max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8'>
        <nav className='flex flex-wrap justify-center -mx-5 -my-2'>
          <div className='px-4'>
            <Link
              href='/'
              className='text-gray-500 md:hover:gray-300 md:hover:underline md:hover:decoration-dotted'
            >
              Home
            </Link>
          </div>
          <div className='px-4'>
            <Link
              href='../../about'
              className='text-gray-500 md:hover:gray-300 md:hover:underline md:hover:decoration-dotted'
            >
              About
            </Link>
          </div>
          <div className='px-4'>
            <Link
              href='#'
              className='text-gray-500 md:hover:gray-300 md:hover:underline md:hover:decoration-dotted'
            >
              記事一覧
            </Link>
          </div>
        </nav>
        <p className='mt-8 text-sm text-center text-gray-500'>{blogConfig.copyright}</p>
      </div>
    </section>
  )
}
