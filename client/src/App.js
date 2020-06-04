import React from 'react'
import HomePage from './Components/HomePage'
import NotFoundPage from './Components/ErrorPages/Error404'
import InternalServerError from './Components/ErrorPages/Error500'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
const App = () => (
  <Router>
    <React.Fragment>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/500' component={InternalServerError} />
        <Route path='*' component={NotFoundPage} />
      </Switch>
    </React.Fragment>
  </Router>
)

export default App
