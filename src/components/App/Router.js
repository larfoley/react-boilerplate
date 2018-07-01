import React from 'react'
import { BrowserRouter, Route } from "react-router-dom"
// Pages
import HomePage from '../../pages/Home'
import AboutPage from '../../pages/About'

const Router = props => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
    </div>
  </BrowserRouter>
)

export default Router
