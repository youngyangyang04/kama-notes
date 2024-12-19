import React from 'react'
import { BsCaretUpFill } from 'react-icons/bs'

interface LikeButtonProps {
  currentUserLiked: boolean
  likeCount: number
  clickHandle: () => void
}

const LikeButton: React.FC<LikeButtonProps> = ({
  currentUserLiked,
  likeCount,
  clickHandle,
}) => {
  return (
    <div
      className={'flex cursor-pointer select-none items-center'}
      onClick={clickHandle}
    >
      <BsCaretUpFill
        className={
          'text-2xl ' + (currentUserLiked ? 'text-blue-600' : 'text-gray-500')
        }
      />
      <span
        className={
          'ml-1 text-sm ' +
          (currentUserLiked ? 'text-blue-600' : 'text-gray-500')
        }
      >
        {likeCount} 次点赞
      </span>
    </div>
  )
}

export default LikeButton
