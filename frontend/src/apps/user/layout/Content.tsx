import React from 'react'

interface ContentProps {
  children: React.ReactNode
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <main className="content-height w-full overflow-y-hidden">
      <div className="h-full w-full overflow-y-auto pt-4">{children}</div>
    </main>
  )
}

export default Content
