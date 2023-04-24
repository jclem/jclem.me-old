import {allPosts} from 'contentlayer/generated'
import Link from 'next/link'
import {FC} from 'react'

const WritingPage: FC = () => {
  return (
    <div className="flex flex-col gap-3">
      <h1>Writing Archive</h1>

      <ul className="divide-borderfont-mono w-full divide-y border border-border text-sm">
        {allPosts.map((post) => (
          <li key={post._id}>
            <Link href={`/writing/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default WritingPage
