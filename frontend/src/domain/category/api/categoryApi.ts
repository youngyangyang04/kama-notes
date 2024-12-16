import { ApiList } from '../../../request'

export const adminCategoryApiList: ApiList = {
  categories: ['GET', '/admin/categories'],
  createCategory: ['POST', '/admin/categories'],
  updateCategory: ['PATCH', '/admin/categories/{categoryId}'],
  deleteCategory: ['DELETE', '/admin/categories/{categoryId}'],
}
