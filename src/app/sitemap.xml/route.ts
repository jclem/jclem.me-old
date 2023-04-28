import {allPosts} from 'contentlayer/generated'
import {NextResponse} from 'next/server'
import {SitemapStream} from 'sitemap'
import {siteURL} from '~/url'

export async function GET() {
  const stream = new SitemapStream({hostname: siteURL})
  const now = new Date()

  stream.write({
    url: '/',
    changefreq: 'yearly',
    priority: 1.0
  })

  stream.write({
    url: '/writing',
    changefreq: 'monthly'
  })

  for (const post of allPosts) {
    // Is the post written in the last month?
    const postDate = new Date(post.publishedAt)
    const isInLastMonth =
      now.getTime() - postDate.getTime() < 1000 * 60 * 60 * 24 * 30

    stream.write({
      url: post.url,
      changefreq: isInLastMonth ? 'daily' : 'yearly',
      lastmod: post.updatedAt ?? post.publishedAt
    })
  }

  stream.end()

  const readable = new ReadableStream({
    start(controller) {
      const encoder = new TextEncoder()

      function push() {
        const buffer = stream.read()

        if (buffer == null) {
          controller.close()
          return
        }

        const bytes = encoder.encode(buffer)
        controller.enqueue(bytes)

        push()
      }

      push()
    }
  })
  return new NextResponse(readable, {
    headers: {
      'Content-Type': 'application/xml'
    }
  })
}
