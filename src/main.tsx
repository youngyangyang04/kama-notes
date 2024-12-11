import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <ConfigProvider locale={zhCN}>
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <App />
    </BrowserRouter>
  </ConfigProvider>,
)
