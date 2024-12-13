import React, { useState } from 'react'
import { Avatar, Button, Form, Input, message, Modal, Segmented } from 'antd'
import {
  ALPHANUMERIC_UNDERSCORE,
  ALPHANUMERIC_UNDERSCORE_CHINESE,
  PASSWORD_ALLOWABLE_CHARACTERS,
} from '../../../base/regex'
import { useLogin } from '../hooks/useLogin.ts'
import { useRegister } from '../hooks/useRegister.ts'

const LoginModal: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('login')
  const [loading, setLoading] = useState(false)

  const { loginHandle } = useLogin()
  const { registerHandle } = useRegister()

  async function onFinish(values: any) {
    setLoading(true)
    if (value === 'login') {
      await loginHandle(values)
      message.success('登录成功')
    } else if (value === 'register') {
      await registerHandle(values)
      message.success('注册成功')
    } else {
      message.error('走到这个分支表示出大问题辣！')
    }
    setLoading(false)
    setOpen(false)
  }

  const LoginForm = () => {
    return (
      <Form
        name="basic"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        onFinish={onFinish}
        style={{ minWidth: '100%' }}
        autoComplete={'off'}
        layout={'vertical'}
      >
        <Form.Item
          label="账号"
          name="account"
          rules={[
            { required: true, message: '请输入账号' },
            {
              pattern: ALPHANUMERIC_UNDERSCORE,
              message: '账号只能包含字母、数字和下划线',
            },
            {
              min: 6,
              max: 16,
              message: '账号长度在 6 - 16 个字符',
            },
          ]}
        >
          <Input autoComplete="off" />
        </Form.Item>
        {value === 'register' && (
          <Form.Item
            label="昵称"
            name="username"
            rules={[
              { required: true, message: '请输入用户名' },
              {
                pattern: ALPHANUMERIC_UNDERSCORE_CHINESE,
                message: '昵称只能包含中文、字母、数字和下划线',
              },
              {
                min: 1,
                max: 16,
                message: '昵称长度在 1 - 16 个字符之间',
              },
            ]}
          >
            <Input autoComplete={'off'} />
          </Form.Item>
        )}
        <Form.Item
          label="密码"
          name="password"
          rules={[
            { required: true, message: '请输入密码' },
            {
              pattern: PASSWORD_ALLOWABLE_CHARACTERS,
              message: '密码中包含不允许的字符',
            },
            {
              min: 8,
              max: 16,
              message: '密码长度在 8 - 16 个字符之间',
            },
          ]}
        >
          <Input.Password autoComplete="new-password" />
        </Form.Item>
        <Button type="primary" htmlType="submit" block loading={loading}>
          {value === 'register' ? '注册' : '登录'}
        </Button>
      </Form>
    )
  }

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
                label: '登录',
                value: 'login',
              },
              {
                label: '注册',
                value: 'register',
              },
            ]}
            value={value}
            onChange={(value) => setValue(value)}
          ></Segmented>
        </div>
        <div className="mt-4 flex justify-center pb-4">
          <LoginForm />
        </div>
      </Modal>
    </div>
  )
}

export default LoginModal
