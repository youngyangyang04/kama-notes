import React, { useEffect, useState } from 'react'
import { FloatButton, Input, Modal } from 'antd'
import { kamanoteHost } from '../../constants'
import { Wifi } from '@icon-park/react'

const HostModal: React.FC = () => {
  const [host, setHost] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setHost(localStorage.getItem(kamanoteHost) || '')
  }, [])

  return (
    <>
      <FloatButton
        type="primary"
        onClick={() => {
          setOpen(true)
        }}
        icon={<Wifi />}
      >
        Host
      </FloatButton>
      <Modal
        title={'Host 配置'}
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
      >
        <div className="pb-4">
          <div className="mb-4 text-sm">
            配置网络请求的 Host 地址，默认为：项目启动地址
          </div>
          <Input
            type="text"
            value={host}
            onChange={(e) => {
              setHost(e.target.value)
              localStorage.setItem(kamanoteHost, e.target.value)
            }}
          />
        </div>
      </Modal>
    </>
  )
}

export default HostModal
