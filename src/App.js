import React, { Component } from 'react';
import { Route , Switch } from 'react-router-dom';

import Overview from './Components/overview';
import Projects from './Components/projects';
import Teams from './Components/teams';
import Employees from './Components/employees';
import NotFound from './Components/notFound';


class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => (
          <Overview />
        )}/>
        <Route exact path='/projects' render={() => (
          <Projects />
        )}/>
        <Route exact path='/teams' render={() => (
          <Teams />
        )}/>
        <Route exact path='/employees' render={() => (
          <Employees />
        )}/>
        <Route render={() => (
          <NotFound />
        )}/>
      </Switch>
    );
  }
}

export default App;
