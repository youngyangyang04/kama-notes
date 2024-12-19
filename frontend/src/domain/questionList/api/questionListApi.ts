import { ApiList } from '../../../request'

export const adminQuestionListApi: ApiList = {
  getQuestionList: ['GET', '/admin/questionlists'],
  createQuestionList: ['POST', '/admin/questionlists'],
  deleteQuestionList: ['DELETE', '/admin/questionlists/{questionListId}'],
  updateQuestionList: ['PATCH', '/admin/questionlists/{questionListId}'],
  getQuestionListItem: ['GET', '/admin/questionlist-items'],
  createQuestionListItem: ['POST', '/admin/questionlist-items'],
  deleteQuestionListItem: [
    'DELETE',
    '/admin/questionlist-items/{questionListItemId}',
  ],
}
