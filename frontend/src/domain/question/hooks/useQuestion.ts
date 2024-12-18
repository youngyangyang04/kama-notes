import { useEffect, useState } from 'react'
import { QuestionWithUserNote } from '../types/types.ts'
import { questionService } from '../service/questionService.ts'

/**
 * 获取题目详情
 */
export function useQuestion(questionId: number) {
  /**
   * 题目详情 + 用户对应的笔记
   */
  const [question, setQuestion] = useState<QuestionWithUserNote>()

  useEffect(() => {
    async function fetchData() {
      const { data } = await questionService.getQuestionByIdService(questionId)
      setQuestion(data)
    }

    fetchData().then()
  }, [questionId])

  return {
    question,
  }
}
