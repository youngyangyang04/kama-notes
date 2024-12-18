import React, { useCallback, useEffect, useState } from 'react'
import { Tree } from 'antd'
import { CategoryTreeNode } from '../types/types.ts'
import { CaretDownOutlined } from '@ant-design/icons'

/**
 * 提供分类树组件
 */
interface CategoryTreeProps {
  treeData: CategoryTreeNode[] // 树形结构
  selectedCategoryId: number | undefined // 默认选中的 categoryId
  setSelectedCategoryId: (categoryId: number) => void // 设置选中的 categoryId
}

const CategoryTreeView: React.FC<CategoryTreeProps> = ({
  treeData,
  selectedCategoryId,
  setSelectedCategoryId,
}) => {
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>()
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>()

  /**
   * 选中节点
   */
  function onSelectHandle(keys: React.Key[]) {
    const key = keys[0]
    setSelectedKeys([key])
    /**
     * 设置选中模型
     */
    setSelectedCategoryId(Number(key))
  }

  /**
   * 展开节点或者节点的父节点
   */
  const openExpandedKey = useCallback(
    (key: React.Key) => {
      if (treeData.find((item) => item.key === Number(key))) {
        // 属于父分类
        setExpandedKeys([key])
      } else {
        // 属于子分类的 key
        treeData.forEach((parent) => {
          if (parent.children) {
            parent.children.forEach((child) => {
              if (child.key === Number(key)) {
                setExpandedKeys([parent.key])
              }
            })
          }
        })
      }
    },
    [treeData],
  )

  function onExpandHandle(keys: React.Key[]) {
    setExpandedKeys(keys)
  }
  /**
   * 当 selectedCategoryId 发生变化时，自动设置
   */
  useEffect(() => {
    if (selectedCategoryId) {
      setSelectedKeys([selectedCategoryId])
      openExpandedKey(selectedCategoryId)
    }
  }, [selectedCategoryId, openExpandedKey])

  return (
    <Tree
      treeData={treeData}
      switcherIcon={<CaretDownOutlined />}
      onExpand={onExpandHandle}
      onSelect={onSelectHandle}
      selectedKeys={selectedKeys}
      expandedKeys={expandedKeys}
      blockNode={true}
    ></Tree>
  )
}

export default CategoryTreeView
