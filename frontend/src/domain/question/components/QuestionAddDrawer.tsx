import React, { useEffect, useState } from 'react'
import { Button, Drawer, Form, Input, message, Select, TreeSelect } from 'antd'
import {
  CreateQuestionBody,
  QuestionOptMode,
  UpdateQuestionBody,
} from '../types/service.ts'
import { QuestionDifficulty, QuestionEntity } from '../types/types.ts'
import { useForm } from 'antd/es/form/Form'
import { diffObject } from '../../../base/utils'

interface QuestionAddDrawerProps {
  mode: QuestionOptMode
  treeData: any
  isDrawerOpen: boolean
  toggleIsDrawerOpen: () => void
  selectedQuestion: QuestionEntity | undefined
  createQuestion: (body: CreateQuestionBody) => void
  updateQuestion: (question: UpdateQuestionBody) => void
}

const QuestionAddDrawer: React.FC<QuestionAddDrawerProps> = ({
  mode,
  treeData,
  isDrawerOpen,
  toggleIsDrawerOpen,
  selectedQuestion,
  createQuestion,
  updateQuestion,
}) => {
  const [form] = useForm()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (mode === 'update') {
      form.setFieldsValue({
        questionId: selectedQuestion?.questionId,
        title: selectedQuestion?.title,
        difficulty: selectedQuestion?.difficulty,
        examPoint: selectedQuestion?.examPoint,
        categoryId: selectedQuestion?.categoryId,
      })
    } else if (mode === 'create') {
      // TODO
      console.log('create')
    } else {
      console.log('error')
      throw new Error('mode is not valid')
    }
    return () => {
      form.resetFields()
    }
  })

  async function onFinish(values: any) {
    setLoading(true)
    if (mode === 'create') {
      createQuestion(values as CreateQuestionBody)
      message.success('创建成功')
      toggleIsDrawerOpen()
    } else if (mode === 'update') {
      if (selectedQuestion === undefined) {
        throw new Error('selectedQuestion is undefined')
      }
      const diffResult = diffObject(
        selectedQuestion,
        values,
      ) as UpdateQuestionBody
      updateQuestion({
        ...diffResult,
        questionId: selectedQuestion.questionId,
      })
      message.success('更新成功')
      toggleIsDrawerOpen()
    }
    setLoading(false)
  }

  return (
    <Drawer
      open={isDrawerOpen}
      title={mode === 'create' ? '创建问题' : '更新问题'}
      onClose={toggleIsDrawerOpen}
      width={450}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
      >
        {mode === 'update' && (
          <Form.Item label={'问题ID'} name={'questionId'}>
            <Input disabled></Input>
          </Form.Item>
        )}
        <Form.Item
          label={'题目'}
          name={'title'}
          rules={[
            { required: true, message: '请输入题目' },
            {
              min: 2,
              max: 255,
              message: '题目长度在 2 - 255 个字符',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label={'难度'} name={'difficulty'} required>
          <Select>
            <Select.Option value={QuestionDifficulty.Easy}>简单</Select.Option>
            <Select.Option value={QuestionDifficulty.Medium}>
              中等
            </Select.Option>
            <Select.Option value={QuestionDifficulty.Hard}>困难</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label={'考点'}
          name={'examPoint'}
          rules={[{ min: 2, max: 255, message: '考点长度在 2 - 255 个字符' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label={'所属分类'} name={'categoryId'} required>
          <TreeSelect
            style={{ width: '100%' }}
            treeData={treeData}
          ></TreeSelect>
        </Form.Item>
        <Form.Item>
          <Button block htmlType="submit" type="primary" loading={loading}>
            {mode === 'create' ? '创建题目' : '更新题目'}
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  )
}

export default QuestionAddDrawer
