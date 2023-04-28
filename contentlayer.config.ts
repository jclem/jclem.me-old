import {assert} from '@jclem/assert'
import {defineDocumentType, makeSource} from 'contentlayer/source-files'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import summaries from './summaries.json'

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: '*.mdx',
  contentType: 'mdx',
  fields: {
    title: {type: 'string', required: true},
    slug: {type: 'string', required: true},
    published: {type: 'boolean', required: true},
    publishedAt: {type: 'date', required: true},
    updatedAt: {type: 'date', required: false},
    hasMath: {type: 'boolean', required: false, default: false}
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => {
        return `/writing/${doc.slug}`
      }
    },

    summary: {
      type: 'string',
      resolve: (doc) => {
        return assert(
          summaries.find((summary) => summary.path === doc._raw.sourceFilePath)
        ).summary
      }
    }
  }
}))

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [rehypeKatex],
    remarkPlugins: [remarkMath]
  }
})
