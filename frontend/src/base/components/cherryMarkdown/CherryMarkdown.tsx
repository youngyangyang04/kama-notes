import React, { useEffect } from 'react'
import Cherry from 'cherry-markdown'
import 'cherry-markdown/dist/cherry-markdown.css'
import './CherryMarkdown.css'
import { message } from 'antd'

interface CherryMarkdownProps {
  value: string // 默认 value
  setValue: (value: string) => void // 动态设置 value
}

const CherryMarkdown: React.FC<CherryMarkdownProps> = ({ setValue, value }) => {
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

    cherryInstance.on(
      'fileUpload',
      async function (
        file: File,
        callback: (url: string, params: any) => void,
      ) {
        if (/image/i.test(file.type)) {
          // 检查文件大小
          if (file.size > 1024 * 1024) {
            message.info('图片大小超过 1 M，请重新选择')
            return
          }
          try {
            message.info('正在上传图片')
            // const url = await uploadPicture(file);
            callback('url', {})
            message.success('上传图片成功')
          } catch (error) {
            message.error('上传图片失败')
            console.log(error)
          }
        } else {
          message.info('不支持的文件类型')
        }
      },
    )

    return () => {
      cherryInstance.destroy()
    }
  }, [])

  return (
    <div id="cherry-markdown" style={{ width: '100%', height: '100%' }}></div>
  )
}

export default CherryMarkdown
