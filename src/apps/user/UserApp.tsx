import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import './UserApp.css'
import Layout from './layout/Layout.tsx'
import Header from './layout/Header.tsx'
import Content from './layout/Content.tsx'
import NavBar from './components/navBar/NavBar.tsx'
import { useDispatch } from 'react-redux'
import { outAdminApp } from '../../store/appSlice.ts'

const UserApp: React.FC = () => {
  /**
   * 初始化 appState 中的 isAdminApp
   */
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(outAdminApp())
  }, [dispatch])

  return (
    <Layout>
      <Header>
        <NavBar />
      </Header>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  )
}

export default UserApp
