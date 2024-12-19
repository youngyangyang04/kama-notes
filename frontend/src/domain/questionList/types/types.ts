/**
 * 题单实体
 */
export interface QuestionListEntity {
  questionListId: number
  name: string
  description: string
  createdAt: string
  updatedAt: string
}

/**
 * 题单项实体
 */
export interface QuestionListItemEntity {
  questionListId: number
  questionId: number
  rank: number
  createdAt: string
  updatedAt: string
}

/**
 * 创建题单body实体
 */
export interface CreateOrUpDateQuestionListBody {
  name: string
  description: string
}
