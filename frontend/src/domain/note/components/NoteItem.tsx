import React, { useEffect, useState } from 'react'
import { NoteWithRelations } from '../types/serviceTypes.ts'

import AuthorCard from './AuthorCard.tsx'
import { QuestionCard } from '../../question'
import NoteContent from './NoteContent.tsx'
import DisplayContent from './DisplayContent.tsx'
import ExpandButton from './ExpandButton.tsx'
import { Divider } from 'antd'
import OptionsCard from './OptionsCard.tsx'

interface NoteItemProps {
  note?: NoteWithRelations
  showAuthor?: boolean // 是否展示作者信息
  showQuestion?: boolean // 是否展示题目信息
  showOptions?: boolean // 是否展示点赞/收藏/评论等按钮
}

const NoteItem: React.FC<NoteItemProps> = ({ note, showAuthor = true }) => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggleCollapsed = () => {
    setIsCollapsed(!isCollapsed)
  }

  useEffect(() => {
    if (note?.needCollapsed) {
      setIsCollapsed(true)
    }
  }, [])

  return (
    <>
      <div className="flex w-full flex-col gap-4">
        <QuestionCard question={note?.question} />
        {showAuthor && <AuthorCard note={note} />}
        {isCollapsed ? (
          <DisplayContent displayContent={note?.displayContent ?? ''} />
        ) : (
          <NoteContent note={note} />
        )}
        <ExpandButton
          toggleCollapsed={toggleCollapsed}
          isCollapsed={isCollapsed}
          key={note?.noteId}
        />
        <OptionsCard note={note} />
      </div>
      <Divider />
    </>
  )
}

export default NoteItem
