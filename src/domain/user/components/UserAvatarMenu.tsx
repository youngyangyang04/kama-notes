import React from 'react'
import { Avatar, Popover } from 'antd'
import ProfileMenu from './ProfileMenu.tsx'

const UserAvatarMenu: React.FC = () => {
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
        <Avatar size={36}>U</Avatar>
      </Popover>
    </div>
  )
}

export default UserAvatarMenu
