import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import ShowPage from './pages/ShowPage'
import ActorPage from './pages/ActorPage'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">🏠</Link>
            </li>
            {/* <li>
              <Link to="/1">Page 1</Link>
            </li>
            <li>
              <Link to="/2">Page 2</Link>
            </li> */}
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/tv:showId" component={ShowPage}></Route>
        <Route exact path="/actor:actorId" component={ActorPage}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
