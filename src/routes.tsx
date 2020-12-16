import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Layout from './components/Layout'

import Main from './pages/Home'
import Users from './pages/Users'
import NewUser from './pages/Users/New'
import User from './pages/Users/View'
import Management from './pages/Management'
import Beard from './pages/Management/Beard/List'
import Hair from './pages/Management/Hair/List'
import NewVacanciesBeard from './pages/Management/Beard/Vacancies/New'
import NewVacanciesHair from './pages/Management/Hair/Vacancies/New'
import Scheduling from './pages/Scheduling'
import ViewPatientsSpecialty from './pages/Management/Beard/Vacancies/View'
import ViewPatientsExam from './pages/Management/Hair/Vacancies/View'

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
          <Route component={Beard} path="/management/beard" exact/>
          <Route component={ViewPatientsSpecialty} path="/management/beard/vacancy/:id" exact/>
          <Route component={NewVacanciesBeard} path="/management/beard/vacancies/new" exact/>
          <Route component={Hair} path="/management/hair" exact/>
          <Route component={ViewPatientsExam} path="/management/hair/vacancy/:id" exact/>
          <Route component={NewVacanciesHair} path="/management/hair/vacancies/new" exact/>
          
          <Route component={Scheduling} path="/scheduling" exact/>
        </>
      </Layout>
    </BrowserRouter>
  )
}

export default Routes;