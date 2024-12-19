import React from 'react'
import { NoteWithRelations } from '../types/serviceTypes.ts'
import { MarkdownRender } from '../../../base/components'

interface NoteContentProps {
  note?: NoteWithRelations
}

const NoteContent: React.FC<NoteContentProps> = ({ note }) => {
  return <MarkdownRender markdown={note?.content ?? ''} />
}

export default NoteContent
