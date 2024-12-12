import React from 'react'
import { NavLink } from 'react-router-dom'
import { Config, Logout, Permissions, User } from '@icon-park/react'
import { USER_HOME } from '../../../apps/user/router/config.ts'
import { useUser } from '../hooks/useUser.ts'
import { useApp } from '../../../base/hooks'
import { useLogout } from '../hooks/useLogout.ts'
import { Admin } from '../types/types.ts'

const ProfileMenu: React.FC = () => {
  const user = useUser()
  const app = useApp()
  /**
   * 退出登录处理函数
   */
  const logout = useLogout()
  const handleLogout = () => {
    logout()
  }

  const itemCss =
    'flex items-center w-full p-2 hover:bg-gray-100 rounded hover:text-neutral-700 gap-2'

  return (
    <div className="flex w-52 flex-col items-center justify-center text-neutral-700">
      <NavLink className={itemCss} to={`${USER_HOME}/${user?.userId}`}>
        <Permissions
          theme="multi-color"
          size="18"
          fill={['#333', '#8dbaf1', '#ffffff', '#e64155']}
        />
        个人主页
      </NavLink>
      <NavLink className={itemCss} to={`${USER_HOME}/${user?.userId}`}>
        <User
          theme="multi-color"
          size="18"
          fill={['#333', '#8dbaf1', '#ffffff', '#e64155']}
        />
        个人信息
      </NavLink>
      {/* 只有管理员才能查看后台内容 */}
      {user.isAdmin === Admin.ADMIN && (
        <NavLink className={itemCss} to={app.isAdminApp ? '/' : '/admin'}>
          <Config
            theme="multi-color"
            size="18"
            fill={['#333', '#8dbaf1', '#ffffff', '#e64155']}
          />
          {!app.isAdminApp ? '后台管理' : '返回用户端'}
        </NavLink>
      )}
      <div className={itemCss + ' cursor-pointer'} onClick={handleLogout}>
        <Logout
          theme="multi-color"
          size="18"
          fill={['#333', '#8dbaf1', '#ffffff', '#e64155']}
        />
        退出登录
      </div>
    </div>
  )
}

export default ProfileMenu
