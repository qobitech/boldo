import AppProviders from './app-provider'
import './index.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { ReactLazyPreload, routes } from './routes/route-component'
import PublicRoute from './routes/public-route'
import { Suspense } from 'react'
import { PulseSVG } from './svg-icons'
import styled from 'styled-components'

const Page404 = ReactLazyPreload(async () => await import('./pages/page404'))

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0a2640;
`

const App = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <LoadingWrapper>
            <PulseSVG />
          </LoadingWrapper>
        }
      >
        <AppProviders>
          <Routes>
            <Route path="/" element={<PublicRoute />}>
              {routes.map(({ path, Component }) => (
                <Route path={path} element={<Component />} key={path} />
              ))}
            </Route>

            <Route path="*" element={<Page404 />} />
          </Routes>
        </AppProviders>
      </Suspense>
    </Router>
  )
}

export default App
