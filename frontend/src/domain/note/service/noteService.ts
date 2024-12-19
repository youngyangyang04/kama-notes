import { httpClient } from '../../../request'
import { noteApiList } from '../api/noteApi.ts'
import {
  CreateNoteParams,
  NoteQueryParams,
  NoteWithRelations,
} from '../types/serviceTypes.ts'

export const noteService = {
  /**
   * 获取笔记列表服务
   */
  getNoteList: (params: NoteQueryParams) => {
    return httpClient.request<NoteWithRelations[]>(noteApiList.getNoteList, {
      queryParams: params,
    })
  },

  /**
   * 创建笔记服务
   */
  createNoteService: (params: CreateNoteParams) => {
    return httpClient.request<number>(noteApiList.createNote, {
      body: params,
    })
  },

  /**
   * 删除笔记服务
   */
  deleteNoteService: (noteId: number) => {
    return httpClient.request<{ noteId: number }>(noteApiList.deleteNote, {
      pathParams: [noteId],
    })
  },

  /**
   * 更新笔记服务
   */
  updateNoteService: (noteId: number, params: CreateNoteParams) => {
    return httpClient.request<{ noteId: number }>(noteApiList.updateNote, {
      pathParams: [noteId],
      body: params,
    })
  },
}
