import { Category } from '../types/types.ts'

export function isOneLevelCategory(category: Partial<Category>) {
  return category.parentCategoryId === 0
}
