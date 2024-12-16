/**
 * 分类列表
 */
export interface CategoryEntity {
  categoryId: number
  name: string
  parentCategoryId: number
  createdAt: string
  updatedAt: string
}

/**
 * 除去创建时间、更新时间
 */
export type Category = Omit<CategoryEntity, 'createdAt' | 'updatedAt'>

/**
 * 树形结构的 Category 列表
 */
export type CategoryTree = Category & {
  key: number
  children?: CategoryTree[]
}

/**
 * Category 的抽屉操作模式
 * create: 新增
 * update: 修改
 */
export type OptMode = 'create' | 'update'
