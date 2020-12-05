import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import TopNavBar from './components/Nav';
import './App.css';
import Landing from './components/Landing';
import Services from './components/Services';
import TopToBottom from './components/ServicePages/TopToBottom'
import Maintenance from './components/ServicePages/Maintenance'
import MoveinMoveOut from './components/ServicePages/MoveinMoveOut'
import SmallProjects from './components/ServicePages/SmallProjects'
import faq from './components/faq'
import ServiceTerms from './components/ServiceTerms';
import Contact from './components/Contact';



function App() {
  return (
    <Router>
      <div className="container">
        <TopNavBar/>
        <br/>
        <Route path="/" exact component={Landing} />
        <Route path="/services" exact component={Services} />
        <Route path="/about-services/top-to-bottom-deluxe-cleaning" exact component={TopToBottom} />
        <Route path="/about-services/maintenance-cleaning" exact component={Maintenance} />
        <Route path="/about-services/move-in-move-out-cleaning" exact component={MoveinMoveOut} />
        <Route path="/about-services/small-projects" exact component={SmallProjects} />
        <Route path="/service-terms" exact component={ServiceTerms} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/faq" exact component={faq} />




    </div>
    </Router>
  );
}

export default App;