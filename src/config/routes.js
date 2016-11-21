import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Main from '../layout/Main';

import HomeContainer from '../containers/HomeContainer';
import EnterprisesContainer from '../containers/EnterprisesContainer';
import RegistrationContainer from '../containers/RegistrationContainer';
import AdminContainer from '../containers/AdminContainer';
import UsersContainer from '../containers/UsersContainer';
import NotFound from '../components/NotFound';
import About from '../components/About';
import Help from '../components/Help';
import Profile from '../components/Profile';

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={Main}>
      <IndexRoute component={HomeContainer} />
      <Route path="despre" component={About} />
      <Route path="admin" component={AdminContainer} />
      <Route path="admin/intreprinderi" component={EnterprisesContainer} />
      <Route path="admin/inregistrare/:id" component={RegistrationContainer} />
      <Route path="admin/utilizatori" component={UsersContainer} />
      <Route path="admin/profil" component={Profile} />
      <Route path="admin/ajutor" component={Help} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;
