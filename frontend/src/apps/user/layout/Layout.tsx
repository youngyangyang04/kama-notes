import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen overflow-y-hidden bg-[#f5f5f5] dark:bg-[#0d0d0d]">
      {children}
    </div>
  )
}

export default Layout
