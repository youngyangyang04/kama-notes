import React from 'react'
import { QuestionWithUserNote } from '../types/types.ts'
import { Button } from 'antd'
import { EditOutlined } from '@ant-design/icons'

interface QuestionViewProps {
  question?: QuestionWithUserNote
  writeOrEditButtonHandle: () => void
}

/**
 * 展示问题的组件
 */
const QuestionView: React.FC<QuestionViewProps> = ({
  question,
  writeOrEditButtonHandle,
}) => {
  return (
    <div className="-mt-4 mb-3 flex w-full justify-center rounded-md bg-white p-4 shadow-sm">
      <div className="w-[900px]">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold text-neutral-800">
            {question?.title}
          </h2>
          {question?.viewCount && (
            <div className="mt-2 text-sm text-gray-800">
              <span className="text-gray-500">浏览量：</span>
              <span className="text-base font-medium">
                {question?.viewCount}
              </span>
            </div>
          )}
        </div>
        <div className="flex gap-4 py-4 text-sm text-neutral-600">
          <div>
            <span>难度：</span>
            <span>{question?.difficulty}</span>
          </div>
          <div>
            <span>考点：</span>
            <span>{question?.examPoint}</span>
          </div>
        </div>
        <Button
          type="primary"
          icon={<EditOutlined />}
          onClick={writeOrEditButtonHandle}
        >
          {question?.userNote.finish ? '编辑笔记' : '写笔记'}
        </Button>
      </div>
    </div>
  )
}

export default QuestionView
