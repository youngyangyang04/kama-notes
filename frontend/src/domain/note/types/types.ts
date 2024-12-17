import { UserEntity } from '../../user'
import { QuestionEntity } from '../../question/types/types.ts'

/**
 * 作者字段
 */
export type Author = Pick<UserEntity, 'userId' | 'username' | 'avatarUrl'>

/**
 * 用户行为字段
 */
export type UserActions = {
  isLiked: boolean
  isCollected: boolean
}

/**
 * 问题摘要字段
 */
export type QuestionSummary = Pick<QuestionEntity, 'questionId' | 'title'>

/**
 * Note 实体定义
 */
export interface NoteEntity {
  /** 笔记 ID */
  noteId: number

  /** 笔记作者 ID */
  authorId: string

  /** 笔记对应的问题 ID */
  questionId: number

  /** 笔记内容 */
  content: string

  /** 点赞数 */
  likeCount: number

  /** 评论数 */
  commentCount: number

  /** 收藏数 */
  collectCount: number

  /** 记录创建时间 */
  createdAt: string // ISO datetime format

  /** 记录更新时间 */
  updatedAt: string // ISO datetime format
}
