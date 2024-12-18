import React, { useEffect } from 'react'
import Cherry from 'cherry-markdown'
import 'cherry-markdown/dist/cherry-markdown.css'
import './CherryMarkdown.css'

interface CherryMarkdownProps {
  value: string // 默认 value
  setValue: (value: string) => void // 动态设置 value
  onFileUpload?: (
    file: File,
    callback: (url: string, params: any) => void,
  ) => void // 上传图片回调
}

const CherryMarkdown: React.FC<CherryMarkdownProps> = ({
  setValue,
  value,
  onFileUpload,
}) => {
  /**
   * 编辑器内容改变处理
   */
  function afterChange(text: string) {
    setValue(text)
  }

  const toolbar = [
    'undo',
    'redo',
    '|',
    {
      bold: ['bold', 'italic', 'underline', 'strikethrough'],
    },
    '|',
    'header',
    'list',
    {
      insert: ['image'],
    },
    'fullScreen',
  ]

  useEffect(() => {
    const cherryInstance = new Cherry({
      id: 'cherry-markdown',
      value: value,
      editor: {
        defaultModel: 'editOnly',
      },
      toolbars: {
        toolbar: toolbar,
        bubble: false,
        float: false,
      },
    })
    cherryInstance.on('afterChange', afterChange)

    if (onFileUpload) {
      cherryInstance.on('fileUpload', onFileUpload)
    }

    return () => {
      cherryInstance.destroy()
    }
  }, [])

  return (
    <div id="cherry-markdown" style={{ width: '100%', height: '100%' }}></div>
  )
}

export default CherryMarkdown
