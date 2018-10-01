import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';

import Home from '../static/home/Home';
import ContactUs from '../static/contactus/ContactUs';
import CaseStudy from '../static/caseStudy/caseStudy';
import AboutUs from '../static/aboutus/aboutus';
import Login from '../static/login/login';
import Solution from '../static/solution/solution';
class App extends Component {
  render() {
    let route = (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact-us" component={ContactUs} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/solution" component={Solution} />
          <Route exact path="/case-study" component={CaseStudy} />
          <Route exact path="/login" component={Login} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    )
    return (
      <div>
        {route}
      </div>
    );
  }
}

export default App;
