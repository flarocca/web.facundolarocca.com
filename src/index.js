import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import ProfessionalExperience from './components/experience/ProfessionalExperience';
import PersonalExperience from './components/experience/PersonalExperience';
import './css/index.css';
import { Router, Route, hashHistory } from 'react-router'


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/experience/professional" component={ProfessionalExperience}/>
    <Route path="/experience/personal" component={PersonalExperience}/>
  </Router>,
  document.getElementById('root')
);