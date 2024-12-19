import { useEffect, useState } from 'react'
import { NoteQueryParams, NoteWithRelations } from '../types/serviceTypes.ts'
import { noteService } from '../service/noteService.ts'
import { Pagination } from '../../../request'

/**
 * 获取笔记列表
 */
export function useNotes(noteQueryParams: NoteQueryParams) {
  /**
   * 笔记列表
   */
  const [noteList, setNoteList] = useState<NoteWithRelations[]>([])
  const [loading, setLoading] = useState(false)

  /**
   * 分页参数
   */
  const [pagination, setPagination] = useState<Pagination>()

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      const { data, pagination } =
        await noteService.getNoteList(noteQueryParams)
      setNoteList(data)
      setPagination(pagination)
      setLoading(false)
    }

    fetchData().then()
  }, [
    noteQueryParams,
    noteQueryParams.authorId,
    noteQueryParams.questionId,
    noteQueryParams.collectionId,
    noteQueryParams.page,
    noteQueryParams.pageSize,
    noteQueryParams.sort,
    noteQueryParams.order,
    noteQueryParams.recentDays,
  ])

  return {
    loading,
    noteList,
    pagination,
  }
}
