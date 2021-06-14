import React from 'react'
import { SideBar } from './SideBar'
import { Route, Switch } from 'react-router-dom'
import { Home } from '../views/Home'
import { CUDStudent } from '../views/CUDStudent'
import '../css/routers.scss'

export function Routers() {
  return (
    <div>
      <SideBar />
      <main>
        <Switch>
          <Route exact={true} path="/">
            <Home />
          </Route>
          <Route exact={true} path="/demo-cud">
            <CUDStudent />
          </Route>
        </Switch>
      </main>
    </div>
  )
}
