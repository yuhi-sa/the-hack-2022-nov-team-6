import { parseISO, format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import { Post } from '../../lib/notion'

export default function List({posts}: {posts: Post[]}) {
    return (
    <div className="max-w-4xl mx-auto">
        {posts.map((post) => {
        if (post.isPublished) {
        return (
            <Link href={`posts/${post.postId}`} key={post.postId}>
                <article className='flex flex-col gap-3 lg:flex-row hover:bg-white/10 lg:p-2'>
                    <div className='lg:w-3/4'>
                        <h3 className='font-bold'>
                        {post.title}
                        </h3>
                        <p className='text-sm mt-3'>
                        <time dateTime={post.publishedAt} className='mr-4'>
                        {format(parseISO(post.publishedAt), 'yyyy年MM月dd日')}
                        </time>
                        <span>■ {post.category}</span>
                        </p>
                    </div>
                    <Image
                        src={post.thumbnail}
                        alt={post.title}
                        width='800'
                        height='600'
                        className='lg:w-1/4 lg:object-cover lg:object-center'
                    />
                </article>
            </Link>
        )}})}
    </div>
    )
}
