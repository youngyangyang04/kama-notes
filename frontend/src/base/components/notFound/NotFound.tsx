import React from 'react'
import { Button, Result } from 'antd'
/**
 * 404 Not Found 组件
 */
const NotFound: React.FC = () => {
  function goBack() {
    window.history.back()
  }
  return (
    <Result
      status="404"
      title="404 Not Found"
      subTitle="访问页面不存在"
      extra={
        <Button type="primary" onClick={goBack}>
          返回上一页
        </Button>
      }
    />
  )
}

export default NotFound
