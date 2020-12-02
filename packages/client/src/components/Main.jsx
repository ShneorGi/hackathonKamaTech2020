import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Onboarding1 from "./Onboarding1"
import Onboarding2 from "./Onboarding2"

export default function Main() {
  return (
    <Router>
      <Switch>
        <Route path="/onboarding2">
          <Onboarding2 />
        </Route>
        <Route path="/">
          <Onboarding1 />
        </Route>
      </Switch>
    </Router>
  )
}
