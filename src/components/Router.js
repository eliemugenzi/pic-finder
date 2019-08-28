import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './Navbar';
import Home from './pages/Home';
import Search from './pages/Search';
import About from './pages/About';
import Contact from './pages/Contact';

const MainRouter = () => (
  <Router>
    <NavBar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/search' component={Search} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Contact} />
    </Switch>
  </Router>
);

export default MainRouter;
