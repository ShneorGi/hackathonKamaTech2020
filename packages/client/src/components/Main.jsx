import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Onboarding1 from "./Onboarding1"
import Onboarding2 from "./Onboarding2"
import Onboarding3 from "./Onboarding3"
import Onboarding4 from "./Onboarding4"

export default function Main() {
  return (
    <Router>
      <Switch>
      <Route path="/onboarding3">
          <Onboarding3 />
        </Route>
        <Route path="/onboarding4">
          <Onboarding4 />
        </Route>
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
