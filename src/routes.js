import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginPage from 'pages/login';
import MainPage from 'pages/main';
// import IntroPage from 'pages/intro';
import TravelPage from 'pages/travel';

function RouteComponent({ }) {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/travel/:id" component={TravelPage} />
      <Route path="/" component={MainPage} />
    </Switch>
  );
}

RouteComponent.propTypes = {

};

export default RouteComponent;
