import { httpClient } from '../../../request'
import { adminQuestionApiList, questionApiList } from '../api/questionApi.ts'
import { QuestionEntity, QuestionWithUserStatus } from '../types/types.ts'
import {
  CreateQuestionBatchBody,
  CreateQuestionBody,
  CreateQuestionResponse,
  QuestionQueryParams,
  UpdateQuestionBody,
} from '../types/service.ts'

/**
 * 管理端查询题目服务
 */
export const adminQuestionService = {
  /**
   * 查询题目服务
   */
  getQuestionList: (params: QuestionQueryParams) => {
    return httpClient.request<QuestionEntity[]>(
      adminQuestionApiList.getQuestionList,
      {
        queryParams: params,
      },
    )
  },

  /**
   * 创建题目服务
   */
  createQuestionService: (body: CreateQuestionBody) => {
    return httpClient.request<CreateQuestionResponse>(
      adminQuestionApiList.createQuestion,
      {
        body: body,
      },
    )
  },

  /**
   * 批量创建题目服务
   */
  createQuestionBatchService: (body: CreateQuestionBatchBody) => {
    return httpClient.request<QuestionEntity[]>(
      adminQuestionApiList.createQuestionBatch,
      {
        body: body,
      },
    )
  },

  /**
   * 删除题目服务
   */
  deleteQuestionService: (questionId: number) => {
    return httpClient.request<{ questionId: number }>(
      adminQuestionApiList.deleteQuestion,
      {
        pathParams: [questionId],
      },
    )
  },

  /**
   * 更新题目服务
   */
  updateQuestionService: (question: UpdateQuestionBody) => {
    return httpClient.request<null>(adminQuestionApiList.updateQuestion, {
      body: question,
      pathParams: [question.questionId],
    })
  },
}

/**
 * 用户端查询题目服务
 */
export const questionService = {
  getQuestionListService: (params: QuestionQueryParams) => {
    return httpClient.request<QuestionWithUserStatus[]>(
      questionApiList.getQuestionList,
      {
        queryParams: params,
      },
    )
  },
}
