import {Feed} from 'feed'
import {NextResponse} from 'next/server'
import {sortedPublishedPosts} from '~/data/posts'

const thisYear = new Date().getFullYear()
const author = {name: 'Jonathan Clem', link: 'https://jclem.me'}

const siteDomain = process.env.SITE_DOMAIN ?? process.env.VERCEL_URL
const siteURL =
  process.env.VERCEL_ENV === 'development'
    ? `http://${siteDomain}`
    : `https://${siteDomain}`

const feed = new Feed({
  title: 'Jonathan Clem · jclem.me',
  id: siteURL,
  link: getURL(),
  description: 'Personal blog of Jonathan Clem',
  copyright: `All rights reserved ${thisYear}, Jonathan Clem`,
  generator: 'https://github.com/jclem/jclem.me',
  author
})

sortedPublishedPosts.forEach((post) => {
  feed.addItem({
    title: post.title,
    id: post.slug,
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

function getURL(path = '') {
  return `${siteURL}${path}`
}
