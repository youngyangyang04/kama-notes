import React, { useState } from 'react'
import { NoteItem, NoteQueryParams, useNotes } from '../../../../domain/note'
import { Panel } from '../../../../base/components'
import { Pagination } from 'antd'

const Home: React.FC = () => {
  const [searchParams, setSearchParams] = useState<NoteQueryParams>({
    page: 1,
    pageSize: 10,
    recentDays: 3,
    sort: 'create',
    order: 'desc',
  })

  const { noteList, pagination } = useNotes(searchParams)

  function handlePageChange(page: number, pageSize: number) {
    setSearchParams((prev) => ({ ...prev, page, pageSize }))
  }

  return (
    <div className="flex justify-center">
      <div className="w-[700px]">
        <Panel>
          {noteList.map((note) => (
            <NoteItem key={note.noteId} note={note} />
          ))}
          <div className="flex justify-center">
            <Pagination total={pagination?.total} onChange={handlePageChange} />
          </div>
        </Panel>
      </div>
    </div>
  )
}

export default Home
