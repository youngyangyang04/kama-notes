import React from 'react'
import { NoteWithRelations } from '../types/serviceTypes.ts'
import { Link } from 'react-router-dom'
import { USER_HOME } from '../../../apps/user/router/config.ts'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { TimeAgo } from '../../../base/components'

interface AuthorCardProps {
  note?: NoteWithRelations
}

/**
 * NoteItem 的笔记作者信息模块
 */
const AuthorCard: React.FC<AuthorCardProps> = ({ note }) => {
  return (
    <div className="flex gap-3">
      <Link to={`${USER_HOME}/${note?.author.userId}`}>
        <Avatar
          src={note?.author.avatarUrl}
          className={
            (note?.author.avatarUrl ? '' : 'bg-yellow-500') + ' cursor-pointer'
          }
          size={36}
        >
          <UserOutlined />
        </Avatar>
      </Link>
      <div className="text-sm text-neutral-800">
        <Link to={`${USER_HOME}/${note?.author.userId}`}>
          <div className="font-medium">{note?.author.username}</div>
        </Link>
        <div className="text-xs text-gray-500">
          <TimeAgo datetime={note?.createdAt} />
        </div>
      </div>
    </div>
  )
}

export default AuthorCard
