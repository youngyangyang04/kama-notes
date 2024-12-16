import { Route } from 'react-router-dom'
import UserApp from '../UserApp.tsx'
import {
  HOME,
  HOME_PAGE,
  USER_CENTER,
  USER_COLLECT,
  USER_INFO,
  USER_NOTE,
} from './config.ts'
import { NotFound } from '../../../base/components'
import Home from '../pages/home/Home.tsx'
import UserCenter from '../pages/userCenter/UserCenter.tsx'
import UserInfo from '../pages/userCenter/info/UserInfo.tsx'
import UserCollect from '../pages/userCenter/collect/UserCollect.tsx'
import UserNote from '../pages/userCenter/note/UserNote.tsx'

export const UserRouteConfig = (
  <Route path={HOME} element={<UserApp />}>
    <Route index element={<Home />}></Route>
    <Route path={HOME_PAGE} element={<Home />}></Route>
    <Route path={USER_CENTER} element={<UserCenter />}>
      <Route index element={<UserInfo />}></Route>
      <Route path={USER_INFO} element={<UserInfo />}></Route>
      <Route path={USER_COLLECT} element={<UserCollect />}></Route>
      <Route path={USER_NOTE} element={<UserNote />}></Route>
    </Route>
    <Route path="/*" element={<NotFound />}></Route>
  </Route>
)
