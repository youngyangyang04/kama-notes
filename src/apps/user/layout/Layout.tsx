import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="h-screen overflow-y-hidden">{children}</div>
}

export default Layout
