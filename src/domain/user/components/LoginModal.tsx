import React, { useState } from 'react'
import { Avatar, Modal, Segmented } from 'antd'

const LoginModal: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('register')

  return (
    <div className="cursor-pointer">
      <Avatar size={36} onClick={() => setOpen(true)}>
        <span className="flex items-center text-xs">登录</span>
      </Avatar>
      <Modal
        title={'注册登录'}
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
      >
        <div className="mt-4">
          <Segmented
            block
            options={[
              {
                label: '注册',
                value: 'register',
              },
              {
                label: '登录',
                value: 'login',
              },
            ]}
            value={value}
            onChange={(value) => setValue(value)}
          ></Segmented>
        </div>
        <div className="mt-4"></div>
      </Modal>
    </div>
  )
}

export default LoginModal
