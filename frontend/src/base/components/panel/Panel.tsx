import React from 'react'

interface PanelProps {
  children: React.ReactNode
}

const Panel: React.FC<PanelProps> = ({ children }) => {
  return (
    <div className="mb-3 w-full rounded-md bg-white p-4 shadow-sm">
      {children}
    </div>
  )
}

export default Panel
