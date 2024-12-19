import React from 'react'
import { NoteWithRelations } from '../types/serviceTypes.ts'
import LikeButton from './LikeButton.tsx'
import CollectButton from './CollectButton.tsx'

interface OptionsCardProps {
  note?: NoteWithRelations
}

const OptionsCard: React.FC<OptionsCardProps> = ({ note }) => {
  return (
    <div className="flex gap-4">
      <LikeButton
        key={`li${note?.noteId}`}
        likeCount={note?.likeCount ?? 0}
        currentUserLiked={note?.userActions?.isLiked ?? false}
        clickHandle={() => {
          console.log('like')
        }}
      ></LikeButton>
      <CollectButton
        key={`c${note?.noteId}`}
        collectCount={note?.collectCount ?? 0}
        currentUserCollected={note?.userActions?.isCollected ?? false}
        clickHandle={() => {
          console.log('collect')
        }}
      ></CollectButton>
    </div>
  )
}

export default OptionsCard
