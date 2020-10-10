import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Layout from './components/Layout'

import Main from './pages/Home'
import Management from './pages/Management'
import Users from './pages/Users'
import NewUser from './pages/Users/Cadastrar'
import User from './pages/Users/Visualizar'

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <>
          <Route component={Main} path="/" exact/>
          <Route component={Users} path="/users" exact/>
          <Route component={NewUser} path="/users/new" exact/>
          <Route component={User} path="/user/:id" exact/>
          <Route component={Management} path="/management" exact/>
        </>
      </Layout>
    </BrowserRouter>
  )
}

export default Routes;