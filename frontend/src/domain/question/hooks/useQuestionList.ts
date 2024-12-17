import { useEffect, useState } from 'react'
import { QuestionEntity } from '../types/types.ts'
import {
  CreateQuestionBody,
  QuestionQueryParams,
  UpdateQuestionBody,
} from '../types/service.ts'
import { adminQuestionService } from '../service/questionService.ts'
import { Pagination } from '../../../request'

export function useQuestionList(queryParams: QuestionQueryParams) {
  /**
   * 问题列表
   */
  const [questionList, setQuestionList] = useState<QuestionEntity[]>([])
  const [loading, setLoading] = useState(false)
  const [pagination, setPagination] = useState<Pagination>()

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      const { data, pagination } =
        await adminQuestionService.getQuestionList(queryParams)
      setQuestionList(data)
      setPagination(pagination)
      setLoading(false)
    }

    fetchData().then()
  }, [
    queryParams.page,
    queryParams.pageSize,
    queryParams.categoryId,
    queryParams.sort,
    queryParams.order,
    queryParams,
  ])

  /**
   * 更新问题操作
   */
  async function updateQuestion(question: UpdateQuestionBody) {
    await adminQuestionService.updateQuestionService(question)
    setQuestionList((prev) => {
      // 更新本地数据
      return prev.map((item) => {
        if (item.questionId === question.questionId) {
          return { ...item, ...question }
        }
        return item
      })
    })
  }

  /**
   * 删除问题
   */
  async function deleteQuestion(questionId: number) {
    await adminQuestionService.deleteQuestionService(questionId)
    // 从本地状态中删除对应的问题
    setQuestionList((prev) =>
      prev.filter((item) => item.questionId !== questionId),
    )
  }

  /**
   * 创建问题
   */
  async function createQuestion(question: CreateQuestionBody) {
    const {
      data: { questionId },
    } = await adminQuestionService.createQuestionService(question)
    // 添加到本地状态
    setQuestionList([
      { ...question, questionId, viewCount: 0, updatedAt: '', createdAt: '' },
      ...questionList,
    ])
  }

  return {
    loading,
    pagination,
    questionList,
    updateQuestion,
    deleteQuestion,
    createQuestion,
  }
}
