import React, { useEffect, useState } from 'react'
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  UserOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Layout, Menu, theme } from 'antd'
import { Link, Outlet, useLocation } from 'react-router-dom'
import {
  ADMIN_HOME,
  CATEGORY_MANAGE,
  QUESTION_LIST_MANAGE,
  QUESTION_MANAGE,
  USER_MANAGE,
} from './router/config.ts'
import { useDispatch } from 'react-redux'
import { intoAdminApp } from '../../store/appSlice.ts'

const { Header, Content, Sider } = Layout

const siderStyle: React.CSSProperties = {
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
}

const items: MenuProps['items'] = [
  {
    key: ADMIN_HOME,
    label: <Link to={ADMIN_HOME}>仪表盘</Link>,
    icon: <AppstoreOutlined />,
  },
  {
    key: USER_MANAGE,
    label: <Link to={USER_MANAGE}>用户管理</Link>,
    icon: <UserOutlined />,
  },
  {
    key: CATEGORY_MANAGE,
    label: <Link to={CATEGORY_MANAGE}>分类管理</Link>,
    icon: <ShopOutlined />,
  },
  {
    key: QUESTION_MANAGE,
    label: <Link to={QUESTION_MANAGE}>问题管理</Link>,
    icon: <BarChartOutlined />,
  },
  {
    key: QUESTION_LIST_MANAGE,
    label: <Link to={QUESTION_LIST_MANAGE}>题单管理</Link>,
    icon: <CloudOutlined />,
  },
]

const AdminApp: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  /**
   * 监听路由变化，设置选中菜单项
   */
  const location = useLocation()
  const [selectedKeys, setSelectedKeys] = useState([''])

  useEffect(() => {
    setSelectedKeys([location.pathname])
  }, [location.pathname])

  /**
   * 设置 Redux 中 isAdminApp
   */
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(intoAdminApp())
  }, [dispatch])

  return (
    <Layout hasSider>
      <Sider
        style={siderStyle}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Menu
          mode="inline"
          theme="dark"
          selectedKeys={selectedKeys}
          items={items}
        />
      </Sider>
      <Layout
        style={{ marginInlineStart: collapsed ? 80 : 200 }}
        className="transition-all"
      >
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content
          style={{
            margin: '24px 16px 0',
            overflow: 'initial',
            height: 'calc(100vh - 88px)',
          }}
        >
          <div
            style={{
              padding: 24,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default AdminApp
