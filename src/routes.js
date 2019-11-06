import React from 'react';
import { Switch, Route } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { PrivateRoute } from 'components';

import LoginPage from 'pages/login';
import MainPage from 'pages/main';
// import IntroPage from 'pages/intro';
import TravelPage from 'pages/travel';

function RouteComponent({ isLoggedIn }) {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/travel/:id" component={TravelPage} />
      <Route path="/" component={MainPage} />
    </Switch>
  );
}

RouteComponent.propTypes = {
  // isLoggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  // isLoggedIn: state.account.isLoggedIn,
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RouteComponent);
