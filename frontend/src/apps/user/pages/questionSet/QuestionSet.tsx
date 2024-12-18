import React, { useEffect, useState } from 'react'
import { Panel } from '../../../../base/components'
import { CategoryTreeView } from '../../../../domain/category'
import {
  convertCategoryTreeToNode,
  useCategory,
} from '../../../../domain/category'
import { useSearchParams } from 'react-router-dom'
import { QuestionTable } from '../../../../domain/question'

const QuestionSet: React.FC = () => {
  /**
   * 获取分类信息树并转换为 TreeSelect 的数据结构
   */
  const { categoryTree } = useCategory()
  const treeData = convertCategoryTreeToNode(categoryTree)

  /**
   * 监听分类树的选中的分类
   */
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>()
  const handleCategorySelect = (categoryId: number) => {
    setSelectedCategoryId(categoryId)
  }

  /**
   * 获取地址栏查询参数
   */
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryId = searchParams.get('categoryId') || ''

  /**
   * 初始化设置 selectedCategoryId
   */
  useEffect(() => {
    if (categoryId) {
      setSelectedCategoryId(Number(categoryId))
    }
  }, [categoryId])

  /**
   * 监听 selectedCategoryId 变化，更新地址栏参数
   */
  useEffect(() => {
    if (selectedCategoryId) {
      setSearchParams({ categoryId: selectedCategoryId.toString() })
    } else {
      setSearchParams({})
    }
  }, [selectedCategoryId, setSearchParams])

  return (
    <div className="flex justify-center gap-3">
      <div className="w-[300px]">
        <Panel>
          <CategoryTreeView
            treeData={treeData}
            selectedCategoryId={selectedCategoryId}
            setSelectedCategoryId={handleCategorySelect}
          />
        </Panel>
      </div>
      <div className="w-[950px]">
        <Panel>
          <QuestionTable categoryId={selectedCategoryId}></QuestionTable>
        </Panel>
      </div>
    </div>
  )
}

export default QuestionSet
