import {defineDocumentType, makeSource} from 'contentlayer/source-files'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: '*.mdx',
  contentType: 'mdx',
  fields: {
    title: {type: 'string', required: true},
    slug: {type: 'string', required: true},
    published: {type: 'boolean', required: true},
    publishedAt: {type: 'date', required: true},
    hasMath: {type: 'boolean', required: false, default: false}
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/writing/${doc.slug}`
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
