import React from 'react'
import { Avatar, Popover } from 'antd'
import ProfileMenu from './ProfileMenu.tsx'
import { useUser } from '../hooks/useUser.ts'
import { UserOutlined } from '@ant-design/icons'

const UserAvatarMenu: React.FC = () => {
  const user = useUser()

  return (
    <div>
      <Popover
        placement="bottomRight"
        arrow={false}
        trigger={'hover'}
        overlayStyle={{ top: '56px' }}
        showArrow={false}
        content={<ProfileMenu />}
      >
        <Avatar
          size={36}
          src={user?.avatarUrl}
          icon={<UserOutlined />}
          className="cursor-pointer"
        >
          U
        </Avatar>
      </Popover>
    </div>
  )
}

export default UserAvatarMenu
