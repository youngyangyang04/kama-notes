import React, { useEffect, useState } from 'react'
import { Panel } from '../../../../base/components'
import {
  AppstoreOutlined,
  ProfileOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import { Menu, MenuProps } from 'antd'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import {
  USER_CENTER,
  USER_COLLECT,
  USER_INFO,
  USER_NOTE,
} from '../../router/config.ts'

const UserCenter: React.FC = () => {
  type MenuItem = Required<MenuProps>['items'][number]

  const items: MenuItem[] = [
    {
      key: USER_INFO,
      label: <NavLink to={USER_INFO}>个人信息</NavLink>,
      icon: <ProfileOutlined />,
    },
    {
      key: USER_COLLECT,
      label: <NavLink to={USER_COLLECT}>个人收藏</NavLink>,
      icon: <AppstoreOutlined />,
    },
    {
      key: USER_NOTE,
      label: <NavLink to={USER_NOTE}>个人笔记</NavLink>,
      icon: <SettingOutlined />,
    },
  ]
  /**
   * 监听路由变化，设置菜单选中状态
   */
  const location = useLocation()
  const [selectedKeys, setSelectedKeys] = useState([USER_INFO])

  useEffect(() => {
    if (location.pathname === USER_CENTER) {
      setSelectedKeys([USER_INFO])
    } else {
      setSelectedKeys([location.pathname])
    }
  }, [location.pathname])

  return (
    <div className="flex justify-center gap-4">
      <div className="w-[15rem]">
        <Panel>
          <Menu items={items} selectedKeys={selectedKeys} />
        </Panel>
      </div>
      <div className="w-[50rem]">
        <Panel>
          <Outlet />
        </Panel>
      </div>
    </div>
  )
}

export default UserCenter
