'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const toUpperFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase()
}

const Breadcrumb = () => {
  const pathname = usePathname()
  if (!pathname) {
    return <></>
  }

  const paths = decodeURI(pathname).substring(1).split('/')

  const roots = ['']
  for (let i = 0; i < paths.length; i++) roots.push(roots[i] + '/' + paths[i])

  return (
    <section className='sample border border-white/20 p-4 relative my-8'>
      <h2 className='absolute top-0 left-0 bg-white text-black text-xs px-2'>パンくずリスト</h2>
      <div className='topic-path'>
        <ul className='text-xs flex flex-nowrap gap-3'>
          <li className='shrink-0'>
            <Link href={'/'}>Home</Link>
          </li>
          {paths.map((path, i) => (
            <li className='shrink-0'>
              {'>'}
              <Link href={roots[i + 1]} key={i}>
                {toUpperFirstLetter(path)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Breadcrumb