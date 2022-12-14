const Author = () => {
  return (
    <>
      <div className='flex text-left mt-4 gap-3 items-center mx-auto'>
        <img src='https://picsum.photos/70/70.webp' alt='代替画像' className='rounded-full' />
        <p>
          <b>Bearaldine Chaplin</b>
          <br />
          <span className='text-sm'>HR Manager</span>
        </p>
      </div>
      <p className='mt-4 text-sm'>
        ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それかダミーコピーです上手どもっさと
      </p>
      <p className='mt-2 text-center text-sm'>
        <a href='component/Author#'>» もっと詳しく</a>
      </p>
      <div className='flex gap-4 justify-center mt-4'>
        <a href='component/Author#' className='bg-gray-400'>
          Icon
        </a>
        <a href='component/Author#' className='bg-gray-400'>
          Icon
        </a>
        <a href='component/Author#' className='bg-gray-400'>
          Icon
        </a>
      </div>
    </>
  )
}

export default Author
