import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import LandingPage from './pages/LandingPage'
import SignUpPage from './pages/SignupPage'

function App() {
  return (
    <>
    <Header/>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/signup" exact>
          <SignUpPage />
        </Route>
        <Route path="*" exact>
          <LandingPage />
        </Route>
      </Switch>
    </>
  )
}

export default App
