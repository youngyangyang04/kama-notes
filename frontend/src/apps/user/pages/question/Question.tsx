import React, { Suspense, useState } from 'react'
import { useParams } from 'react-router-dom'
import { QuestionView, useQuestion } from '../../../../domain/question'
import { MarkdownEditor, Panel } from '../../../../base/components'
import { Button, Pagination } from 'antd'
import { Upload } from '@icon-park/react'
import { EyeOutlined } from '@ant-design/icons'
import { NoteItem, NoteQueryParams, useNotes } from '../../../../domain/note'

const Question: React.FC = () => {
  /**
   * 地址栏参数
   */
  const { questionId } = useParams()

  /**
   * 获取问题携带用户相关笔记的问题详情
   */
  const { question } = useQuestion(Number(questionId))

  /**
   * 写笔记 / 编辑笔记按钮点击事件
   */
  function writeOrEditButtonHandle() {
    toggleEditorVisible()
  }

  /**
   * 笔记内容
   */
  const [value, setValue] = useState('')
  const setValueHandle = (value: string) => {
    setValue(value)
  }

  /**
   * 控制编辑器显示隐藏功能
   */
  const [isEditorVisible, setIsEditorVisible] = useState(false)
  const toggleEditorVisible = () => {
    setIsEditorVisible(!isEditorVisible)
  }

  /**
   * 获取和问题相关的笔记列表
   */
  const [noteQueryParams, setNoteQueryParams] = useState<NoteQueryParams>({
    page: 1,
    pageSize: 10,
    questionId: Number(questionId),
  })

  /**
   *
   */
  function paginationChangeHandle(page: number, pageSize: number) {
    setNoteQueryParams((prev) => {
      return {
        ...prev,
        page,
        pageSize,
      }
    })
  }

  const { noteList, pagination } = useNotes(noteQueryParams)

  return (
    <>
      <QuestionView
        question={question}
        writeOrEditButtonHandle={writeOrEditButtonHandle}
      />
      {isEditorVisible && (
        <div className="mb-4 flex w-full justify-center">
          <div className="w-[900px]">
            <div className="h-[calc(100vh-var(--header-height)-65px)]">
              <Suspense fallback={<div>loading</div>}>
                <MarkdownEditor
                  value={value}
                  setValue={setValueHandle}
                ></MarkdownEditor>
              </Suspense>
            </div>
            <div className="sticky bottom-0 z-20 flex justify-end gap-2 border-t border-gray-200 bg-white p-4 shadow">
              <Button icon={<EyeOutlined />}>预览笔记</Button>
              <Button type="primary" icon={<Upload />}>
                提交笔记
              </Button>
            </div>
          </div>
        </div>
      )}
      <div className="flex w-full justify-center">
        <div className="w-[700px]">
          <Panel>
            <div>
              {noteList.map((note) => {
                return <NoteItem key={`nti${note.noteId}`} note={note} />
              })}
              <div className="flex justify-center">
                <Pagination
                  total={pagination?.total}
                  onChange={paginationChangeHandle}
                ></Pagination>
              </div>
            </div>
          </Panel>
        </div>
      </div>
    </>
  )
}

export default Question
