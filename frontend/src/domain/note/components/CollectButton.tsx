import React from 'react'
import { BsStarFill } from 'react-icons/bs'

interface CollectButtonProps {
  currentUserCollected: boolean
  collectCount: number
  clickHandle: () => void
}

const CollectButton: React.FC<CollectButtonProps> = ({
  collectCount,
  currentUserCollected,
  clickHandle,
}) => {
  return (
    <div
      className="flex cursor-pointer select-none items-center"
      onClick={clickHandle}
    >
      {currentUserCollected ? (
        <div className="flex cursor-pointer select-none items-center">
          <BsStarFill className="text-blue-500 hover:text-blue-600" />
          <span className="ml-1 text-sm text-blue-500 hover:text-blue-600">
            {collectCount} 次收藏
          </span>
        </div>
      ) : (
        <div className="flex cursor-pointer select-none items-center">
          <BsStarFill className="text-gray-500 hover:text-gray-600" />
          <span className="ml-1 text-sm text-gray-500 hover:text-gray-600">
            {collectCount} 次收藏
          </span>
        </div>
      )}
    </div>
  )
}

export default CollectButton
