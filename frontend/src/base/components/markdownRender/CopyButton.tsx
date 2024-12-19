import React, { useState } from 'react'
import { FaCheck, FaRegCopy } from 'react-icons/fa'

interface CopyButtonProps {
  textToCopy: string
}

const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return !copied ? (
    <FaRegCopy
      className={'rounded p-1 text-2xl hover:bg-gray-200'}
      onClick={handleCopy}
      style={{
        position: 'absolute',
        top: 1,
        right: 1,
        zIndex: 100,
      }}
    ></FaRegCopy>
  ) : (
    <FaCheck
      className={'rounded p-1 text-2xl text-green-500 hover:bg-gray-200'}
      style={{
        position: 'absolute',
        top: 1,
        right: 1,
        zIndex: 100,
      }}
    ></FaCheck>
  )
}

export default CopyButton
