import { Route } from 'react-router-dom'
import UserApp from '../UserApp.tsx'
import { HOME } from './config.ts'
import { NotFound } from '../../../base/components'
import Text from '../pages/test/Text.tsx'
import Home from '../pages/home/Home.tsx'

export const UserRouteConfig = (
  <Route path={HOME} element={<UserApp />}>
    <Route index element={<Home />}></Route>
    <Route path="/home" element={<Home />}></Route>
    <Route path="/text" element={<Text />}></Route>
    <Route path="/*" element={<NotFound />}></Route>
  </Route>
)
