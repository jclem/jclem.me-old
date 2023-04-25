import {allPosts} from 'contentlayer/generated'

export const sortedPublishedPosts = allPosts
  .filter((p) => p.published)
  .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))
