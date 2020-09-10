import React from 'react';
import { Switch, Route } from 'react-router-dom';

/**
 * Import all page components here
 */
import MainPage from './pages/HomePage/HomePage';
import PasswordGeneratorPage from './pages/PasswordGenerator/PasswordGenerator';

const Routes = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={MainPage}></Route>
      <Route exact path='/passwordgenerator' component={PasswordGeneratorPage}></Route>
    </Switch>
  );
}

export default Routes;