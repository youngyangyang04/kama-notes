import { useEffect, useState } from 'react'
import { CategoryTree } from '../types/types.ts'
import { adminCategoryService } from '../service/categoryService.ts'
import { isOneLevelCategory } from '../utils'
import { CreateCategoryBody } from '../types/categoryService.ts'

export function useCategory() {
  const [loading, setLoading] = useState(false)
  const [categoryTree, setCategoryTree] = useState<CategoryTree[]>([])

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      const resp = await adminCategoryService.categoriesService()
      setCategoryTree(() => {
        // 添加 key 属性
        return resp.data.map((item) => {
          return {
            ...item,
            key: item.categoryId,
          }
        })
      })
      setLoading(false)
    }

    fetchData().then()
  }, [])

  /**
   * 新增分类处理函数
   *
   * 如果「新增分类」是父分类，在获取到服务器返回的「新增分类」的 categoryId 后
   * 直接将「新增分类」添加到 categoryTree 数组中
   *
   * 如果「新增分类」是子分类，需要在 categoryTree 数组中查找「新增分类」的父分类
   * 然后再将「新增分类」添加到其父分类的 children 数组中
   */
  async function createCategory(newCategory: CreateCategoryBody) {
    const resp = await adminCategoryService.createCategoryService({
      name: newCategory.name,
      parentCategoryId: newCategory.parentCategoryId,
    })
    const newCategoryId = resp.data.categoryId
    if (isOneLevelCategory(newCategory)) {
      // 父分类的情况
      setCategoryTree((prev) => {
        return [
          ...prev,
          {
            ...newCategory,
            key: newCategoryId,
            categoryId: newCategoryId,
            children: [],
          },
        ]
      })
    } else {
      // 子分类的情况
      setCategoryTree((prev) => {
        return prev.map((item) => {
          if (item.categoryId === newCategory.parentCategoryId) {
            if (item.children) {
              item.children.push({
                ...newCategory,
                key: newCategoryId,
                categoryId: newCategoryId,
              })
            } else {
              item.children = [
                {
                  ...newCategory,
                  key: newCategoryId,
                  categoryId: newCategoryId,
                },
              ]
            }
          }
          return item
        })
      })
    }
  }

  /**
   * 删除分类处理函数
   *
   * 如果「被删分类」是父分类，直接从本地状态中删除对应的分类
   *
   * 如果「被删分类」是子分类，先找到其父分类，
   * 然后将其父分类的 children 数组中删除对应的分类
   */
  async function deleteCategory(category: CategoryTree) {
    // 调用删除接口
    await adminCategoryService.deleteCategoryService(category.categoryId)

    // 从本地状态中删除对应的分类
    if (isOneLevelCategory(category)) {
      // 父分类的情况
      setCategoryTree((prev) => {
        return prev.filter((item) => item.categoryId !== category.categoryId)
      })
    } else {
      setCategoryTree((prev) => {
        return prev.map((item) => {
          if (item.categoryId === category.parentCategoryId) {
            if (item.children) {
              item.children = item.children.filter(
                (child) => child.categoryId !== category.categoryId,
              )
            }
          }
          return item
        })
      })
    }
  }

  /**
   * 更新分类处理函数
   *
   * 如果「被更新分类」是父分类，直接将「被更新分类」替换掉本地状态中对应的分类
   *
   * 如果「被更新分类」是子分类，先找到其父分类，
   * 然后将其父分类的 children 数组中对应的分类替换掉
   */
  async function updateCategory(updatedCategory: CategoryTree) {
    // 调用更新分类的接口
    await adminCategoryService.updateCategoryService(updatedCategory)

    // 更新本地的分类
    if (isOneLevelCategory(updatedCategory)) {
      setCategoryTree((prev) => {
        return prev.map((item) => {
          if (item.categoryId === updatedCategory.categoryId) {
            return updatedCategory
          }
          return item
        })
      })
    } else {
      setCategoryTree((prev) => {
        return prev.map((item) => {
          if (item.categoryId === updatedCategory.parentCategoryId) {
            if (item.children) {
              item.children = item.children.map((child) => {
                if (child.categoryId === updatedCategory.categoryId) {
                  return updatedCategory
                }
                return child
              })
            }
          }
          return item
        })
      })
    }
  }

  return {
    loading,
    categoryTree,
    createCategory,
    deleteCategory,
    updateCategory,
  }
}
