import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Layout from './components/Layout'

import Main from './pages/Home'
import Users from './pages/Users'
import NewUser from './pages/Users/Cadastrar'
import User from './pages/Users/Visualizar'
import Management from './pages/Management'
import Specialty from './pages/Management/Specialty'
import Exam from './pages/Management/Exam'

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
          <Route component={Specialty} path="/specialty" exact/>
          <Route component={Exam} path="/exam" exact/>
        </>
      </Layout>
    </BrowserRouter>
  )
}

export default Routes;