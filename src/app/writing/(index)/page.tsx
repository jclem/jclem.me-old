import {allPosts} from 'contentlayer/generated'
import Link from 'next/link'
import {FC} from 'react'

const WritingPage: FC = () => {
  const sortedPublishedPosts = allPosts
    .filter((p) => p.published)
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))

  return (
    <div className="flex flex-col gap-3">
      <h1>Writing Archive</h1>

      <ul className="w-full divide-y divide-border border border-border font-mono text-sm">
        {sortedPublishedPosts.map((post) => (
          <li
            key={post._id}
            className="flex flex-col divide-y divide-dashed divide-border"
          >
            <Link href={`/writing/${post.slug}`} className="p-1">
              {post.title}
            </Link>
            <time dateTime={post.publishedAt} className="p-1">
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default WritingPage
