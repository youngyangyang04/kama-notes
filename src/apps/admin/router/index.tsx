import { Route } from 'react-router-dom'
import AdminApp from '../../admin/AdminApp.tsx'
import { ADMIN_HOME } from './config.ts'
import { NotFound } from '../../../base/components'

export const AdminRouteConfig = (
  <Route path={ADMIN_HOME}>
    <Route index element={<AdminApp />}></Route>
    <Route path="*" element={<NotFound />}></Route>
  </Route>
)
