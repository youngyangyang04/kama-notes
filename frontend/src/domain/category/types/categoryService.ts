/**
 * 新增分类的请求体类型和返回值类型
 */
export type CreateCategoryBody = {
  parentCategoryId: number
  name: string
}

export type CreateCategoryResponse = {
  categoryId: number
}
