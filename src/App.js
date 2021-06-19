import React from 'react'
import './css/Reset.scss'
import './css/Global.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './views/HomePage/Home'
import Service from './views/ServicesPage/Services'
import Product from './views/ProductsPage/Products'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/services" exact>
            <Service />
          </Route>
          <Route path="/products" exact>
            <Product />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
