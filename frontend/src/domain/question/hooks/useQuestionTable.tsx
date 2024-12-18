import { useEffect, useState } from 'react'
import { QuestionWithUserStatus } from '../types/types.ts'
import { QuestionQueryParams } from '../types/service.ts'
import { questionService } from '../service/questionService.ts'
import { Pagination } from '../../../request'

export function useQuestionTable(questionQueryParams: QuestionQueryParams) {
  /**
   * 问题列表 + 加载状态
   */
  const [questionList, setQuestionList] = useState<QuestionWithUserStatus[]>([])
  const [loading, setLoading] = useState(false)
  const [pagination, setPagination] = useState<Pagination>()

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      const { data, pagination } =
        await questionService.getQuestionListService(questionQueryParams)
      setQuestionList(data)
      setPagination(pagination)
      setLoading(false)
    }

    fetchData().then()
  }, [
    questionQueryParams,
    questionQueryParams.sort,
    questionQueryParams.order,
    questionQueryParams.categoryId,
    questionQueryParams.page,
    questionQueryParams.pageSize,
  ])

  return {
    loading,
    questionList,
    pagination,
  }
}
