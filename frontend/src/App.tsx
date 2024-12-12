import './App.css'
import { Routes } from 'react-router-dom'
import { AdminRouteConfig } from './apps/admin/router'
import { UserRouteConfig } from './apps/user/router'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from './base/components'

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Routes>
        {AdminRouteConfig}
        {UserRouteConfig}
      </Routes>
    </ErrorBoundary>
  )
}

export default App