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

      const code = (
        <code {...props} data-language={language}>
          {props.children}
        </code>
      )

      if (isLanguageBlock) {
        return (
          <>
            <div className="flex items-center justify-end gap-2 border-b border-dashed border-border p-1 text-xs text-text-deemphasize">
              {language}
              <CopyButton copy={String(props.children).trim()} />
            </div>

            <div className="overflow-x-auto p-2 text-xs">{code}</div>
          </>
        )
      } else {
        return <>{code}</>
      }
    }
  }
}
