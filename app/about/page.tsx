import Image from 'next/image'
import Link from 'next/link'
import { FaTwitter, FaInstagramSquare, FaGithubAlt } from 'react-icons/fa'
import { getUsersData } from '../../lib/notion'
import { FaTwitter, FaInstagramSquare, FaGithubAlt } from 'react-icons/fa'

const About = async () => {
  const users = await getUsersData()
  const user = users[0]
  return (
    <>
      <div className='flex text-left mt-12 gap-3 items-center mx-auto'>
        <Image src={user.icon} alt={user.name} width={100} height={100} className='rounded-full' />
        <p className='text-2xl tracking-widest'>
          <b>{user.name}</b>
        </p>
      </div>
      <section
        className='prose lg:prose-xl prose-invert mt-8'
        dangerouslySetInnerHTML={{ __html: user.html }}
      />
      <div className='flex gap-4 justify-center mt-8'>
        <Link href={`https://twitter.com/${user.twitter}`} className='text-3xl hover:text-link'>
          <FaTwitter />
        </Link>
        <Link
          href={`https://www.instagram.com/${user.instagram}`}
          className='text-3xl hover:text-link'
        >
          <FaInstagramSquare />
        </Link>
        <span className='text-3xl hover:text-link text-base/25'>
          <FaGithubAlt />
        </span>
      </div>
    </>
  )
}

export default About
