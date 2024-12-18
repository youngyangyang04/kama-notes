import { Route } from 'react-router-dom'
import UserApp from '../UserApp.tsx'
import {
  HOME,
  HOME_PAGE,
  QUESTION,
  QUESTION_SET,
  USER_CENTER,
  USER_COLLECT,
  USER_HOME,
  USER_INFO,
  USER_NOTE,
} from './config.ts'
import { NotFound } from '../../../base/components'
import Home from '../pages/home/Home.tsx'
import UserCenter from '../pages/userCenter/UserCenter.tsx'
import UserInfo from '../pages/userCenter/info/UserInfo.tsx'
import UserCollect from '../pages/userCenter/collect/UserCollect.tsx'
import UserNote from '../pages/userCenter/note/UserNote.tsx'
import QuestionSet from '../pages/questionSet/QuestionSet.tsx'
import Question from '../pages/question/Question.tsx'
import UserHome from '../pages/userHome/UserHome.tsx'

export const UserRouteConfig = (
  <Route path={HOME} element={<UserApp />}>
    <Route index element={<Home />} />
    <Route path={HOME_PAGE} element={<Home />} />
    <Route path={USER_CENTER} element={<UserCenter />}>
      <Route index element={<UserInfo />} />
      <Route path={USER_INFO} element={<UserInfo />} />
      <Route path={USER_COLLECT} element={<UserCollect />} />
      <Route path={USER_NOTE} element={<UserNote />} />
    </Route>
    <Route path={QUESTION_SET} element={<QuestionSet />} />
    <Route path={`${QUESTION}/:questionId`} element={<Question />} />
    <Route path={`${USER_HOME}/:userId`} element={<UserHome />} />
    <Route path="/*" element={<NotFound />} />
  </Route>
)
