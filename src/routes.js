import React from 'react';
import { Switch, Route } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { PrivateRoute } from 'components';

import LoginPage from 'pages/login';
import MainPage from 'pages/main';
import IntroPage from 'pages/intro';
import TravelPage from 'pages/travel';
import RegisterPage from 'pages/register';
import KorailPage from 'pages/korail';

function RouteComponent({ isLogin }) {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/travel/:id" component={TravelPage} />
      <Route path="/korail" component={KorailPage} />
      <Route path="/" component={isLogin ? MainPage : IntroPage} />
    </Switch>
  );
}

RouteComponent.propTypes = {
  // isLoggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isLogin: state.app.isLogin,
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RouteComponent);
