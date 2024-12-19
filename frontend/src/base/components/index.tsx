import NotFound from './notFound/NotFound.tsx'
import ErrorFallback from './errorFallback/ErrorFallback.tsx'
import HostModal from './hostModal/hostModal.tsx'
import Panel from './panel/Panel.tsx'
import React from 'react'
import TimeAgo from './timeAgo/TimeAgo.tsx'
import MarkdownRender from './markdownRender/MarkdownRender.tsx'

/**
 * 懒加载 markdown 编辑器，避免其影响打包后的 index.js 体积过大
 */
const MarkdownEditor = React.lazy(
  () => import('./cherryMarkdown/CherryMarkdown.tsx'),
)

export { MarkdownEditor }

export { NotFound, ErrorFallback, HostModal, Panel, TimeAgo, MarkdownRender }
