import { SortOrder } from '../../../base/types'
import { QuestionEntity } from './types.ts'

/** questionService 的接口需要使用到的接口参数定义 */

/**
 * 查询题目列表 query 参数类型定义
 */
export type QuestionSort = 'view' | 'difficulty'

export type QuestionQueryParams = {
  categoryId?: number
  sort?: QuestionSort
  order?: SortOrder
  page: number
  pageSize: number
}

/**
 * 创建题目 body 参数类型定义
 */
export type CreateQuestionBody = Omit<
  QuestionEntity,
  'questionId' | 'createdAt' | 'updatedAt' | 'viewCount'
>

export type CreateQuestionResponse = {
  questionId: number
}

/**
 * 批量创建题目 body 参数定义
 */
export type CreateQuestionBatchBody = {
  markdown: string
}

/**
 * 更新题目 body 参数定义
 */
export type UpdateQuestionBody = Partial<CreateQuestionBody> & {
  questionId: number
}

/**
 * 操作类型定义
 */
export type QuestionOptMode = 'update' | 'create'

/**
 * 用户完成状态
 */
export interface UserQuestionStatus {
  finish: boolean
}

/**
 * 用户笔记
 */
export type UserNote = {
  noteId: number
  content: string
} & UserQuestionStatus
