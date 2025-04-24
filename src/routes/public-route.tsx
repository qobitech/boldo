import { Outlet } from 'react-router-dom'
import Layout from '../layout'

const PublicRoute = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

export default PublicRoute
