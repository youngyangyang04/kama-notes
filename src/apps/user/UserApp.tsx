import React from 'react'
import { Outlet } from 'react-router-dom'
import './UserApp.css'
import Layout from './layout/Layout.tsx'
import Header from './layout/Header.tsx'
import Content from './layout/Content.tsx'
import NavBar from './components/navBar/NavBar.tsx'

const UserApp: React.FC = () => {
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
