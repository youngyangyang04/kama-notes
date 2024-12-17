/** noteService 接口需要使用 */
import { SortOrder } from '../../../base/types'
import { Author, NoteEntity, QuestionSummary, UserActions } from './types.ts'

/**
 * 查询笔记列表查询参数
 */
export interface NoteQueryParams {
  questionId?: number
  authorId?: string
  collectionId?: number
  sort?: 'create'
  order?: SortOrder
  recentDays?: number
  page: number
  pageSize: number
}

/**
 * 返回的笔记列表
 *
 * 包含作者信息、题目信息、展示内容
 */
export type NoteWithRelations = Omit<
  NoteEntity,
  'authorId' | 'questionId' | 'updatedAt'
> & {
  displayContend: string
  author: Author
  question: QuestionSummary
  userActions: UserActions | undefined
}
