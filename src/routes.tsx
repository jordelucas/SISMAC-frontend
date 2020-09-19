import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Layout from './components/Layout'

import Main from './pages/Home'
import Users from './pages/Users'

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <>
          <Route component={Main} path="/" exact/>
          <Route component={Users} path="/users" exact/>
        </>
      </Layout>
    </BrowserRouter>
  )
}

export default Routes;