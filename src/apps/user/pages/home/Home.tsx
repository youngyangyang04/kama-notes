import React from 'react'
import { Button } from 'antd'
import { httpClient } from '../../../../request'

const Home: React.FC = () => {
  async function clickHandle() {
    await httpClient.request(['POST', '/test'], {
      body: {
        name: 'test',
      },
    })
  }

  return (
    <div>
      <div>
        <Button onClick={clickHandle}>Click Me!</Button>
      </div>
    </div>
  )
}

export default Home
