import React from 'react'

interface DisplayContentProps {
  displayContent: string
}

const DisplayContent: React.FC<DisplayContentProps> = ({ displayContent }) => {
  return <div>{displayContent}</div>
}

export default DisplayContent
