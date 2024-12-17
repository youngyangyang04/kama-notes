import { ApiList } from '../../../request'

export const noteApiList: ApiList = {
  getNoteList: ['GET', '/notes'],
  createNote: ['POST', '/notes'],
  updateNote: ['PATCH', '/notes/{noteId}'],
  deleteNote: ['DELETE', '/notes/{noteId}'],
}
