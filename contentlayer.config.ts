import {defineDocumentType, makeSource} from 'contentlayer/source-files'

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: '*.mdx',
  contentType: 'mdx',
  fields: {
    title: {type: 'string', required: true},
    slug: {type: 'string', required: true}
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
  documentTypes: [Post]
})
