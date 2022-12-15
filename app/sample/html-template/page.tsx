import { blogConfig } from '../../../blog.config'
import Breadcrumb from '../../../components/common/Breadcrumb'

export default function HtmlTemplate() {
  return (
    <>
      <header className='z-50 py-4 bg-zinc-800'>
        <div className='container md:flex md:justify-between'>
          <h1 className='text-xl font-bold tracking-wider' aria-label='Brand'>
            {blogConfig.blogTitle}
          </h1>
          <nav aria-label='Global'>
            <ul className='md:flex md:gap-x-4'>
              <li>
                <a href='#'>Home</a>
              </li>
              <li>
                <a href='#'>About</a>
              </li>
              <li>
                <a href='#'>記事一覧</a>
              </li>
              <li>
                <a href='#'>サイトマップ</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
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
      <div className='flex flex-col lg:flex-row lg:justify-between container lg:max-w-5xl lg:gap-12 px-6 pb-12'>
        <main className='pb-8'>
          <section>
            <h2 className='font-bold text-xl text-center mt-10'>最新の記事</h2>
            <div className='flex flex-col gap-6 mt-8'>
              <a href='#'>
                <article className='flex gap-3 lg:hover:bg-white/10 lg:p-2 lg:rounded'>
                  <div>
                    <h3 className='font-bold'>
                      記事タイトルがここに入ります。記事タイトルがここに入ります。
                    </h3>
                    <p className='text-sm mt-3'>
                      <time dateTime='2022-12-02T11:30:00.000Z' className='mr-4'>
                        2022年12月2日
                      </time>
                      <span>■ カテゴリー A</span>
                    </p>
                  </div>
                  <img
                    src='https://picsum.photos/100/100.webp'
                    alt='代替画像'
                    className='aspect-[3/2] object-cover rounded-lg'
                  />
                </article>
              </a>
              <a href='#'>
                <article className='flex gap-3 hover:bg-white/10 lg:p-2 '>
                  <div>
                    <h3 className='font-bold'>
                      記事タイトルがここに入ります。記事タイトルがここに入ります。
                    </h3>
                    <p className='text-sm mt-3'>
                      <time dateTime='2022-12-02T11:30:00.000Z' className='mr-4'>
                        2022年12月2日
                      </time>
                      <span>■ カテゴリー A</span>
                    </p>
                  </div>
                  <img
                    src='https://picsum.photos/100/100.webp'
                    alt='代替画像'
                    className='aspect-[3/2] object-cover rounded-lg'
                  />
                </article>
              </a>
            </div>
          </section>
          <section className='sample border border-white/20 p-4 relative my-8'>
            <h2 className='absolute top-0 left-0 bg-white text-black text-xs px-2'>
              パンくずリスト
            </h2>
            <div className='topic-path'>
              <ul className='text-xs flex flex-nowrap gap-3'>
                <li className='shrink-0'>
                  <a href='#'>Home</a>
                </li>
                <li className='shrink-0 before:content-[">"]'>
                  <a href='#'>カテゴリーA</a>
                </li>
                <li className=' before:content-[">"] truncate ...'>
                  ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた
                </li>
              </ul>
            </div>
          </section>
          {/* コンポーネントを使用したパンくずリスト */}
          <Breadcrumb />

          <section className='sample border border-white/20 p-4 relative my-8'>
            <h2 className='absolute top-0 left-0 bg-white text-black text-xs px-2'>
              ページナビゲーション
            </h2>
            <div className='pager py-2'>
              <ul className='flex gap-3 justify-center'>
                <li>
                  <a href='#'>« 前へ</a>
                </li>
                <li>
                  <a href='#'>1</a>
                </li>
                <li>
                  <a href='#'>2</a>
                </li>
                <li>3</li>
                <li>
                  <a href='#'>4</a>
                </li>
                <li>
                  <a href='#'>次へ »</a>
                </li>
              </ul>
            </div>
          </section>
          <section className='sample border border-white/20 p-4 relative my-8'>
            <h2 className='absolute top-0 left-0 bg-white text-black text-xs px-2'>
              記事個別ページ
            </h2>
            <h1 className='font-bold text-xl text-center mt-10'>
              記事タイトルがここに入ります。記事タイトルがここに入ります。
            </h1>
            <div className='meta flex gap-4'>
              <p>2022年11月26日</p>
              <p>
                <a href='#'>カテゴリーA</a>
              </p>
            </div>
            <p>
              ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た(50)しはでリンクですまた箱のダミーコピーです上手どもっさと俄たますて、みんなまでぶんを弾いとだまし(100文字)。
            </p>
            <div className='tag-area mt-4'>
              <ul className='flex gap-4'>
                <li>
                  <a href='#'>#タグ1</a>
                </li>
                <li>
                  <a href='#'>#タグ2</a>
                </li>
              </ul>
            </div>
            <div className='previous-next'>
              <p>前の記事</p>
              <p>
                <a href='#'>記事タイトルがここに入ります。記事タイトルがここに入ります。</a>
              </p>
              <p>次の記事</p>
              <p>
                <a href='#'>記事タイトルがここに入ります。記事タイトルがここに入ります。</a>
              </p>
            </div>
          </section>
        </main>
        <aside className='lg:basis-72 lg:pt-8'>
          <div className='bg-white/10 p-6 mt-6 rounded-lg'>
            <h2 className='font-bold text-center'>この記事の著者</h2>
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
              <a href='#'>» もっと詳しく</a>
            </p>
            <div className='flex gap-4 justify-center mt-4'>
              <a href='#' className='bg-gray-400'>
                Icon
              </a>
              <a href='#' className='bg-gray-400'>
                Icon
              </a>
              <a href='#' className='bg-gray-400'>
                Icon
              </a>
            </div>
          </div>
          <div className=' bg-white/10 rounded-lg p-6 mt-6'>
            <h2 className='font-bold text-center'>最新の記事</h2>
            <ul className='space-y-3 leading-5 marker:text-sky-400 list-disc pl-5 mt-4 text-sm'>
              <li>
                <a href='#' className='hover:text-link'>
                  ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-link'>
                  ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-link'>
                  ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた
                </a>
              </li>
            </ul>
          </div>
          <div className='bg-white/10 rounded-lg p-6 mt-6'>
            <h2 className='font-bold text-center'>カテゴリー</h2>
            <ul className='space-y-3 marker:text-sky-400 list-disc pl-5 leading-5 mt-4 text-sm'>
              <li>
                <a href='#' className='hover:text-link'>
                  カテゴリーA
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-link'>
                  カテゴリーB
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-link'>
                  カテゴリーC
                </a>
              </li>
            </ul>
          </div>
          <div className='bg-white/10 rounded-lg p-6 mt-6'>
            <h2 className='font-bold text-center'>タグ</h2>
            <ul className='flex flex-wrap gap-3 leading-5 mt-4 text-xs'>
              <li>
                <a href='#' className='p-1 border border-current hover:bg-white/10'>
                  タグ1
                </a>
              </li>
              <li>
                <a href='#' className='p-1 border border-current hover:bg-white/10'>
                  タグ2
                </a>
              </li>
              <li>
                <a href='#' className='p-1 border border-current hover:bg-white/10'>
                  タグ3
                </a>
              </li>
            </ul>
          </div>
          <div className='text-center bg-white/10 rounded-lg p-6 mt-6'>
            <h2 className='font-bold'>サイト内検索</h2>
            <input
              id='search-input'
              type='text'
              placeholder='キーワードを入力…'
              className='mt-4 p-2 rounded'
            />
          </div>
        </aside>
      </div>
      <footer className='alignfull bg-tertiary-100 p-4 text-center bg-zinc-800'>
        <div className='container'>
          <ul className='flex flex-wrap justify-center gap-4 text-sm'>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>記事一覧</a>
            </li>
            <li>
              <a href='#'>サイトマップ</a>
            </li>
          </ul>
          <p className='text-lg font-bold my-8 tracking-wider'>{blogConfig.blogTitle}</p>
          <p className='text-sm'>{blogConfig.copyright}</p>
        </div>
      </footer>
    </>
  )
}