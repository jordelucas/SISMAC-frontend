import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Layout from './components/Layout'

import Main from './pages/Home'
import Users from './pages/Users'
import NewUser from './pages/Users/New'
import User from './pages/Users/View'
import Management from './pages/Management'
import Specialty from './pages/Management/Specialty/List'
import Exam from './pages/Management/Exam/List'
import NewExam from './pages/Management/Exam/New'
import NewSpecialty from './pages/Management/Specialty/New'

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
          <Route component={Specialty} path="/management/specialty" exact/>
          <Route component={NewSpecialty} path="/management/specialty/new" exact/>
          <Route component={Exam} path="/management/exam" exact/>
          <Route component={NewExam} path="/management/exam/new" exact/>
        </>
      </Layout>
    </BrowserRouter>
  )
}

export default Routes;