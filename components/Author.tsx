import Image from 'next/image'
import Link from 'next/link'
import { User } from '../lib/notion'
import { FaTwitter, FaInstagramSquare, FaGithubAlt } from 'react-icons/fa'

const Author = ({ user }: { user: User }) => {
  return (
    <>
      <div className='flex text-left mt-4 gap-3 items-center mx-auto'>
        <Image src={user.icon} alt={user.name} width={50} height={50} className='rounded-full' />
        <p>
          <b>{user.name}</b>
          <br />
          <span className='text-sm'>ブロガー</span>
        </p>
      </div>
      <p className='mt-2 text-center text-sm'>
        <Link href='../about' className='hover:border-b hover:border-current hover:border-dotted'>
          » もっと詳しく
        </Link>
      </p>
      <div className='flex gap-4 justify-center mt-4'>
        <Link href={`https://twitter.com/${user.twitter}`} className='text-2xl hover:text-link'>
          <FaTwitter />
        </Link>
        <Link
          href={`https://www.instagram.com/${user.instagram}`}
          className='text-2xl hover:text-link'
        >
          <FaInstagramSquare />
        </Link>
        <span className='text-2xl hover:text-link text-base/25'>
          <FaGithubAlt />
        </span>
      </div>
    </>
  )
}

export default Author
