import { Route } from 'react-router-dom'
import AdminApp from '../../admin/AdminApp.tsx'
import {
  ADMIN_HOME,
  CATEGORY_MANAGE,
  QUESTION_LIST_MANAGE,
  QUESTION_MANAGE,
  USER_MANAGE,
} from './config.ts'
import { NotFound } from '../../../base/components'
import DashBroad from '../pages/dashBroad/DashBroad.tsx'
import AdminUser from '../pages/adminUser/AdminUser.tsx'
import AdminQuestion from '../pages/adminQuestion/AdminQuestion.tsx'
import AdminCategory from '../pages/adminCategory/AdminCategory.tsx'
import AdminQuestionList from '../pages/adminQuestionList/AdminQuestionList.tsx'

export const AdminRouteConfig = (
  <Route path={ADMIN_HOME} element={<AdminApp />}>
    <Route index element={<DashBroad />} />
    <Route path={USER_MANAGE} element={<AdminUser />} />
    <Route path={QUESTION_MANAGE} element={<AdminQuestion />} />
    <Route path={CATEGORY_MANAGE} element={<AdminCategory />} />
    <Route path={QUESTION_LIST_MANAGE} element={<AdminQuestionList />} />
    <Route path="*" element={<NotFound />}></Route>

    <Route path="*" element={<NotFound />}></Route>
  </Route>
)
