import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';

import LazyLoading from '../hoc/lazyLoading';
import Solution from '../static/solution/solution';
import Home from '../static/home/Home';

//const Solution  = LazyLoading(() => {
//    return import('../static/solution/solution');
//});

const AboutUs  = LazyLoading(() => {
  return import('../static/aboutus/aboutus');
});

const CaseStudy  = LazyLoading(() => {
  return import('../static/caseStudy/caseStudy');
});

const ContactUs  = LazyLoading(() => {
  return import('../static/contactus/ContactUs');
});

const Privacy = LazyLoading(() => {
  return import('../static/privacy/privacy')
})


class App extends Component {
  render() {
    document.title = 'Paylinx'
    let route = (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact-us" component={ContactUs} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/solution" component={Solution} />
          <Route exact path="/case-study" component={CaseStudy} />
          <Route exact path="/privacy-policy" component={Privacy} />
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
