import { Route } from 'react-router-dom'
import UserApp from '../UserApp.tsx'
import { HOME } from './config.ts'
import { NotFound } from '../../../base/components'

export const UserRouteConfig = (
  <Route path={HOME}>
    <Route index element={<UserApp />}></Route>
    <Route path="*" element={<NotFound />}></Route>
  </Route>
)
