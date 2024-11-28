import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'

createRoot(document.getElementById('root')!).render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>,
)
