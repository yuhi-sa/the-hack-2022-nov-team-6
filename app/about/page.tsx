import Image from 'next/image'
import Link from 'next/link'
import { getUsersData } from '../../lib/notion'

const About = async () => {
  const users = await getUsersData()
  const user = users[0]
  return (
    <>
      <div className='flex text-left mt-4 gap-3 items-center mx-auto'>
        <Image src={user.icon} alt={user.name} width={50} height={50} className='rounded-full' />
        <p>
          <b>{user.name}</b>
        </p>
      </div>
      <section
        className='prose lg:prose-xl prose-invert'
        dangerouslySetInnerHTML={{ __html: user.html }}
      />
      <p className='mt-2 text-center text-sm'>
        <Link href='unimplemented'>» もっと詳しく</Link>
      </p>
      <div className='flex gap-4 justify-center mt-4'>
        <Link href={`https://twitter.com/${user.twitter}`} className='bg-gray-400'>
          <Image src='/twitter.png' alt={user.twitter} width='30' height='30' />
        </Link>
        <Link href={`https://www.instagram.com/${user.instagram}`} className='bg-gray-400'>
          <Image src='/instagram.png' alt={user.instagram} width='30' height='30' />
        </Link>
      </div>
    </>
  )
}

export default About
