import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Onboarding1 from "./Onboarding1"
import Onboarding2 from "./Onboarding2"
import Onboarding3 from "./Onboarding3"
import Onboarding4 from "./Onboarding4"
import Onboarding5 from "./Onboarding5"
import Onboarding6 from "./Onboarding6"
import Onboarding7 from "./Onboarding7"

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
        <Route path="/onboarding5">
          <Onboarding5 />
        </Route>
        <Route path="/onboarding6">
          <Onboarding6 />
        </Route>

        <Route path="/onboarding7">
          <Onboarding7 />
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
