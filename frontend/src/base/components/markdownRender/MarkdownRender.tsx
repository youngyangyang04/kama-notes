import React, { useEffect, useRef } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import CopyButton from './CopyButton.tsx'
import { Image } from 'antd'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

interface MarkdownRenderProps {
  markdown: string
}

const MarkdownRender: React.FC<MarkdownRenderProps> = ({ markdown }) => {
  const markdownBodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!markdownBodyRef.current) return
    markdownBodyRef.current.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightElement(block as HTMLElement)
    })
  })

  return (
    <div className="markdown-body" ref={markdownBodyRef}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          code(props) {
            const { children, className, ...rest } = props
            const match = /language-(\w+)/.exec(className || '')
            return match ? (
              <div style={{ position: 'relative' }}>
                <CopyButton textToCopy={String(children)} />
                <code className={className} {...props}>
                  {children}
                </code>
              </div>
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            )
          },
          img(props) {
            const { src, alt } = props
            return <Image src={src} alt={alt} width={'100%'} />
          },
          p: ({ children }) => (
            <div style={{ marginTop: 0, marginBottom: 16 }}>{children}</div>
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  )
}

export default MarkdownRender
