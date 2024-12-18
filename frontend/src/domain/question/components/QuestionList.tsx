import React, { useState } from 'react'
import {
  Button,
  Pagination,
  Popconfirm,
  Table,
  TableProps,
  Tooltip,
  TreeSelect,
} from 'antd'
import { QuestionEntity } from '../types/types.ts'
import { QuestionOptMode, QuestionQueryParams } from '../types/service.ts'
import { useCategory } from '../../category'
import { useQuestionList } from '../hooks/useQuestionList.ts'
import { AddThree, DeleteOne, EditTwo } from '@icon-park/react'
import QuestionAddDrawer from './QuestionAddDrawer.tsx'

/**
 * 管理端的问题列表
 */
const QuestionList: React.FC = () => {
  /**
   * 分页参数
   */
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  /**
   * 查询参数
   */
  const [queryParams, setQueryParams] = useState<QuestionQueryParams>({
    page: 1,
    pageSize: 10,
  })

  /**
   * 获取分类树并将其映射为 TreeSelect 的数据结构
   */
  const { categoryTree } = useCategory()

  const treeData = categoryTree.map((item) => {
    return {
      title: item.name,
      value: item.categoryId,
      key: item.categoryId,
      children: item.children?.map((child) => ({
        title: child.name,
        value: child.categoryId,
        key: child.categoryId,
      })),
    }
  })

  /**
   * 获取问题列表、分页信息以及加载状态
   */
  const {
    questionList,
    pagination,
    loading,
    createQuestion,
    updateQuestion,
    deleteQuestion,
  } = useQuestionList(queryParams)

  /**
   * Drawer 的打开状态
   */
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const toggleIsDrawerOpen = () => setIsDrawerOpen(!isDrawerOpen)

  /**
   * 打开抽屉的模式
   */
  const [mode, setMode] = useState<QuestionOptMode>('create')

  /**
   * 打开抽屉时选中的问题
   */
  const [selectedQuestion, setSelectedQuestion] = useState<
    QuestionEntity | undefined
  >(undefined)

  /**
   * 表格点击排序时的处理事件
   */
  const handleTableChange: TableProps<QuestionEntity>['onChange'] = (
    _,
    __,
    sorter: any,
  ) => {
    console.log(sorter)
    if (sorter.column) {
      setQueryParams((prev) => {
        return {
          ...prev,
          sort: sorter.columnKey === 'difficulty' ? 'difficulty' : 'view',
          order: sorter.order === 'ascend' ? 'asc' : 'desc',
        }
      })
    } else {
      // 清空 查询参数中的 sort 和 order
      setQueryParams((prev) => {
        delete prev.sort
        delete prev.order
        return {
          ...prev,
        }
      })
    }
  }

  /**
   * TreeSelect onChange 事件
   */
  const handleTreeSelectChange = (value: number) => {
    setQueryParams((prev) => {
      return {
        ...prev,
        categoryId: value,
      }
    })
  }

  /**
   * pagination onChange 事件
   */
  const handlePaginationChange = (page: number, pageSize: number) => {
    setPage(page)
    setPageSize(pageSize)
    setQueryParams({
      ...queryParams,
      page: page,
      pageSize: pageSize,
    })
  }

  /**
   * 表格的列定义
   */
  const columns: TableProps<QuestionEntity>['columns'] = [
    {
      title: '问题 ID',
      dataIndex: 'questionId',
      key: 'questionId',
      width: '10%',
    },
    { title: '标题', dataIndex: 'title', key: 'title', width: '40%' },
    { title: '考点', dataIndex: 'examPoint', key: 'examPoint', width: '15%' },
    {
      title: '难度',
      dataIndex: 'difficulty',
      key: 'difficulty',
      sorter: true,
      width: '10%',
    },
    {
      title: '浏览量',
      dataIndex: 'viewCount',
      key: 'viewCount',
      sorter: true,
      width: '10%',
    },
    {
      title: '操作',
      width: '15%',
      render: (_, question) => {
        console.log(question)
        return (
          <div className="flex items-center gap-3">
            <Tooltip title={'编辑'}>
              <EditTwo
                theme="multi-color"
                size="18"
                fill={['#333', '#8dbaf1', '#ffffff', '#e64155']}
                className="cursor-pointer"
                onClick={() => {
                  setSelectedQuestion(question)
                  setMode('update')
                  setIsDrawerOpen(true)
                }}
              />
            </Tooltip>
            <Popconfirm
              title={'确认删除？'}
              onConfirm={async () => {
                await deleteQuestion(question.questionId)
              }}
            >
              <Tooltip title={'删除'}>
                <DeleteOne
                  theme="multi-color"
                  size="18"
                  fill={['#333', '#8dbaf1', '#ffffff', '#e64155']}
                  className="cursor-pointer"
                />
              </Tooltip>
            </Popconfirm>
          </div>
        )
      },
    },
  ]

  return (
    <div className="rounded bg-white p-4">
      <div className="mb-3 flex justify-between">
        <div className="flex gap-2">
          <TreeSelect
            prefix={<span>选择分类：</span>}
            style={{
              width: 300,
            }}
            treeData={treeData}
            value={queryParams.categoryId}
            onChange={handleTreeSelectChange}
          ></TreeSelect>
          {/* TODO: 重置 TODO*/}
          <Button type="primary">重置</Button>
        </div>
        <Button
          type="primary"
          icon={<AddThree />}
          onClick={() => {
            setMode('create')
            setIsDrawerOpen(true)
            setSelectedQuestion(undefined)
          }}
        >
          创建问题
        </Button>
      </div>

      {/* 数据表格 */}
      <Table
        columns={columns}
        dataSource={questionList}
        rowKey="questionId"
        loading={loading}
        pagination={false}
        onChange={handleTableChange}
      />

      {/* 分页 */}
      <div className="mt-4 text-right">
        <Pagination
          current={page}
          pageSize={pageSize}
          total={pagination?.total}
          onChange={handlePaginationChange}
        />
      </div>

      <QuestionAddDrawer
        mode={mode}
        isDrawerOpen={isDrawerOpen}
        toggleIsDrawerOpen={toggleIsDrawerOpen}
        selectedQuestion={selectedQuestion}
        treeData={treeData}
        createQuestion={createQuestion}
        updateQuestion={updateQuestion}
      />
    </div>
  )
}

export default QuestionList
