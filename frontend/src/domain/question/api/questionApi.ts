import { ApiList } from '../../../request'

/**
 * 管理员问题接口
 */
export const adminQuestionApiList: ApiList = {
  getQuestionList: ['GET', '/admin/questions'],
  createQuestion: ['POST', '/admin/questions'],
  createQuestionBatch: ['POST', '/admin/questions/batch'],
  updateQuestion: ['PATCH', '/admin/questions/{questionId}'],
  deleteQuestion: ['DELETE', '/admin/questions/{questionId}'],
}

/**
 * 普通用户问题接口
 */
export const questionApiList: ApiList = {
  getQuestionList: ['GET', '/questions'],
  getQuestionById: ['GET', '/questions/{questionId}'],
}
