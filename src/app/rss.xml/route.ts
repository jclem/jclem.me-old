import {Feed} from 'feed'
import {NextResponse} from 'next/server'
import {sortedPublishedPosts} from '~/data/posts'
import {getURL} from '~/url'

const thisYear = new Date().getFullYear()
const author = {name: 'Jonathan Clem', link: 'https://jclem.me'}

const feed = new Feed({
  title: 'jclem.me',
  feed: getURL('/rss.xml'),
  id: getURL(),
  link: getURL(),
  description: 'Personal blog of Jonathan Clem',
  copyright: `All rights reserved ${thisYear}, Jonathan Clem`,
  generator: 'https://github.com/jclem/jclem.me',
  author
})

sortedPublishedPosts.forEach((post) => {
  feed.addItem({
    title: post.title,
    id: getURL(post.url),
    link: getURL(post.url),
    description: post.summary,
    date: new Date(post.publishedAt),
    copyright: `All rights reserved ${thisYear}, Jonathan Clem`,
    author: [author]
  })
})

export async function GET() {
  return new NextResponse(feed.rss2(), {
    headers: {
      'Content-Type': 'application/rss+xml'
    }
  })
}
