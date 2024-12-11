import React from 'react'

interface HeaderProps {
  children?: React.ReactNode
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return <header className="header-height z-20 shadow-sm">{children}</header>
}

export default Header
