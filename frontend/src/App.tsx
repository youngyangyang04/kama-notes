import './App.css'
import { Routes } from 'react-router-dom'
import { AdminRouteConfig } from './apps/admin/router'
import { UserRouteConfig } from './apps/user/router'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback, HostModal } from './base/components'
import { useLogin } from './domain/user'
import { useEffect } from 'react'
import './base/styles/github-markdown.css'
import './base/styles/github-markdown-light.css'

function App() {
  /**
   * 自动登录功能
   */
  const { whoAmIHandle } = useLogin()

  useEffect(() => {
    whoAmIHandle().then()
  }, [whoAmIHandle])

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Routes>
        {AdminRouteConfig}
        {UserRouteConfig}
      </Routes>
      <HostModal />
    </ErrorBoundary>
  )
}

export default App
