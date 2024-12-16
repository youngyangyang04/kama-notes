import { httpClient } from '../../../request'
import { Category, CategoryTree } from '../types/types.ts'
import { adminCategoryApiList } from '../api/categoryApi.ts'
import {
  CreateCategoryBody,
  CreateCategoryResponse,
} from '../types/categoryService.ts'

export const adminCategoryService = {
  /**
   * 获取分类列表
   */
  categoriesService: () => {
    return httpClient.request<CategoryTree[]>(adminCategoryApiList.categories, {
      queryParams: {},
    })
  },

  /**
   * 新增分类
   */
  createCategoryService: (body: CreateCategoryBody) => {
    return httpClient.request<CreateCategoryResponse>(
      adminCategoryApiList.createCategory,
      {
        body: body,
      },
    )
  },

  /**
   * 删除分类
   */
  deleteCategoryService: (categoryId: number) => {
    return httpClient.request<null>(adminCategoryApiList.deleteCategory, {
      pathParams: [categoryId],
    })
  },

  /**
   * 更新分类
   */
  updateCategoryService: (category: Category) => {
    return httpClient.request<null>(adminCategoryApiList.updateCategory, {
      body: {
        name: category.name,
      },
      pathParams: [category.categoryId],
    })
  },
}
