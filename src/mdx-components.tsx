import type {MDXComponents} from 'mdx/types'
import {CopyButton} from './components/copy-button'

export function useMDXComponents(
  components: MDXComponents = {}
): MDXComponents {
  return {
    ...components,
    code: (props) => {
      const language = props.className?.replace(/^language-/, '')
      const isLanguageBlock = props.className?.startsWith('language-')

      return (
        <code {...props} data-language={language}>
          {props.children}
          {isLanguageBlock && (
            <CopyButton copy={String(props.children).trim()} />
          )}
        </code>
      )
    }
  }
}
