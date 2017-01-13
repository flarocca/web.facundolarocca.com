import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import ProfessionalResume from './components/resume/ProfessionalResume';
import PersonalResume from './components/resume/PersonalResume';
import './css/index.css';
import { Router, Route, hashHistory } from 'react-router'


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById('root')
);