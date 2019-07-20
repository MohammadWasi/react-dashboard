import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Alert from '../layout/Alert';
import Login from '../auth/Login';
import Dashboard from '../dashboard/Dashboard';


const Routes = () => {
  return (
    <section className='container'>
      <Alert />
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/dashboard' component={Dashboard} />
        
      </Switch>
    </section>
  );
};

export default Routes;
