import { Category, CategoryTree, CategoryTreeNode } from '../types/types.ts'

/**
 * 判断是否是父分类
 */
export function isParentCategory(category: Partial<Category>) {
  return category.parentCategoryId === 0
}

/**
 * 将 category 转为分类树
 */
export function convertCategoryTreeToNode(
  categoryTree: CategoryTree[],
): CategoryTreeNode[] {
  return categoryTree.map((item) => {
    return {
      title: item.name,
      key: item.categoryId,
      children: item.children ? convertCategoryTreeToNode(item.children) : [],
    }
  })
}
