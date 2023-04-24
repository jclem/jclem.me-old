import {assert} from '@jclem/assert'
import {allPosts} from 'contentlayer/generated'
import {getMDXComponent} from 'next-contentlayer/hooks'
import {FC} from 'react'

interface Props {
  params: {
    slug: string
  }
}

const PostPage: FC<Props> = ({params}) => {
  const post = assert(allPosts.find((post) => post.slug === params.slug))
  const Content = getMDXComponent(post.body.code)

  return (
    <article className="article">
      <h1>{post.title}</h1>
      <Content />
    </article>
  )
}

export default PostPage

export async function generateStaticParams() {
  return allPosts.map((post) => ({slug: post.slug}))
}