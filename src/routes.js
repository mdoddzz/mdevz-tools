import React from 'react'
import { Switch, Route } from 'react-router-dom'

/**
 * Import all page components here
 */
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import JsonFormatter from './pages/JsonFormatter/JsonFormatter'
import UrlShortener from './pages/UrlShortener/UrlShortener'
import PasswordGeneratorPage from './pages/PasswordGenerator/PasswordGenerator'
import SecurityHeaders from './pages/SecurityHeaders/SecurityHeaders'
import DnsChecker from './pages/DnsChecker/DnsChecker'

import NotFound from './pages/NotFound/NotFound'

const Routes = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/contact' component={Contact}></Route>
      <Route exact path='/general/jsonformatter' component={JsonFormatter}></Route>
      <Route exact path='/general/urlshortener' component={UrlShortener}></Route>
      <Route exact path='/general/dnschecker' component={DnsChecker}></Route>
      <Route exact path='/security/passwordgenerator' component={PasswordGeneratorPage}></Route>
      <Route exact path='/security/securityheaders' component={SecurityHeaders}></Route>

      <Route component={NotFound} />
    </Switch>
  );
}

export default Routes;