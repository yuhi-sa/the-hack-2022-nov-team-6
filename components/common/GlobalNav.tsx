import Link from 'next/link'

type Props = {
  isMobileMenuActive: boolean
}

const GlobalNav = ({ isMobileMenuActive }: Props) => {
  return (
    <nav
      aria-label='Global'
      className={`${
        isMobileMenuActive ? 'absolute' : 'hidden'
      } absolute md:static md:block top-16 left-0 w-full md:w-auto`}
    >
      <ul className='flex flex-col md:flex-row gap-px md:gap-x-4 bg-bg md:bg-inherit'>
        <li>
          <Link
            href='/'
            className='flex md:block justify-between after:content-["»"] md:after:content-none after:mr-1 after:text-link md:hover:text-link md:hover:underline md:hover:decoration-wavy md:block p-3 md:p-0 bg-zinc-500/20 active:bg-zinc-500/30 md:bg-inherit active:md:bg-inherit'
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href='#'
            className='flex md:block justify-between after:content-["»"] md:after:content-none after:mr-1 after:text-link md:hover:text-link md:hover:underline md:hover:decoration-wavy md:block p-3 md:p-0 bg-zinc-500/20 active:bg-zinc-500/30 md:bg-inherit active:md:bg-inherit'
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href='#'
            className='flex md:block justify-between after:content-["»"] md:after:content-none after:mr-1 after:text-link md:hover:text-link md:hover:underline md:hover:decoration-wavy md:block p-3 md:p-0 bg-zinc-500/20 active:bg-zinc-500/30 md:bg-inherit active:md:bg-inherit'
          >
            記事一覧
          </Link>
          <ul className='hidden'>
            <li>
              <Link
                href='../../sample'
                className='flex md:block justify-between after:content-["»"] md:after:content-none after:mr-1 after:text-link md:hover:text-link md:hover:underline md:hover:decoration-wavy md:block p-3 md:p-0 bg-zinc-500/20 active:bg-zinc-500/30 md:bg-inherit active:md:bg-inherit'
              >
                リスト項目1
              </Link>
            </li>
            <li>
              <Link
                href='#'
                className='flex md:block justify-between after:content-["»"] md:after:content-none after:mr-1 after:text-link md:hover:text-link md:hover:underline md:hover:decoration-wavy md:block p-3 md:p-0 bg-zinc-500/20 active:bg-zinc-500/30 md:bg-inherit active:md:bg-inherit'
              >
                リスト項目2
              </Link>
            </li>
            <li>
              <Link
                href='#'
                className='flex md:block justify-between after:content-["»"] md:after:content-none after:mr-1 after:text-link md:hover:text-link md:hover:underline md:hover:decoration-wavy md:block p-3 md:p-0 bg-zinc-500/20 active:bg-zinc-500/30 md:bg-inherit active:md:bg-inherit'
              >
                リスト項目3
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link
            href='../../sample/html-template'
            className='flex md:block justify-between after:content-["»"] md:after:content-none after:mr-1 after:text-link md:hover:text-link md:hover:underline md:hover:decoration-wavy md:block p-3 md:p-0 bg-zinc-500/20 active:bg-zinc-500/30 md:bg-inherit active:md:bg-inherit'
          >
            テンプレート(仮)
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default GlobalNav
