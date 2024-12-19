import React from 'react'
import { QuestionSummary } from '../types/types.ts'
import { Link } from 'react-router-dom'
import { QUESTION } from '../../../apps/user/router/config.ts'

interface QuestionCardProps {
  question?: QuestionSummary
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
  return (
    <div className="text-lg font-medium text-neutral-800">
      <Link to={`${QUESTION}/${question?.questionId}`}>{question?.title}</Link>
    </div>
  )
}

export default QuestionCard
