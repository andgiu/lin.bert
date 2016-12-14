import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import About from './components/about/About';
/*
import About from './components/about/About';
import ProjectDetail from './components/project/ProjectDetail';
import Press from './components/press/Press';
*/

export default (
  <Route component={App}>

    <Route path="about" component={About} />

    <Route path="*" component={HomePage} />


  </Route>
);
