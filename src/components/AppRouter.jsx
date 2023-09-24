
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Title from '../pages/Title';
import Skills from '../pages/Skills';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/title" component={Title} />
        <Route path="/skills" component={Skills} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        {/* Add more routes for other sections */}
      </Switch>
    </Router>
  );
}

export default AppRouter;
