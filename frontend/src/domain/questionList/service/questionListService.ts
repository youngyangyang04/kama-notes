import { httpClient } from '../../../request'
import { adminQuestionListApi } from '../api/questionListApi.ts'
import { CreateOrUpDateQuestionListBody } from '../types/types.ts'

export const adminQuestionListService = {
  /**
   * 获取题单列表服务
   */
  getQuestionListService: (queryParams: { page: number; pageSize: number }) => {
    return httpClient.request(adminQuestionListApi.getQuestionList, {
      queryParams,
    })
  },

  /**
   * 创建题单服务
   */
  createQuestionListService: (params: CreateOrUpDateQuestionListBody) => {
    return httpClient.request(adminQuestionListApi.createQuestionList, {
      body: params,
    })
  },

  /**
   * 删除题单服务
   */
  deleteQuestionListService: (questionListId: number) => {
    return httpClient.request(adminQuestionListApi.deleteQuestionList, {
      pathParams: [questionListId],
    })
  },

  /**
   * 更新题单信息服务
   */
  updateQuestionListService: (
    questionListId: number,
    params: CreateOrUpDateQuestionListBody,
  ) => {
    return httpClient.request(adminQuestionListApi.updateQuestionList, {
      pathParams: [questionListId],
      body: params,
    })
  },
}
