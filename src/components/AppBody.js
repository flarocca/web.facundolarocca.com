import React, { Component } from 'react';
import '../css/App-body.css';
import AppStore from '../stores/AppStore';
import { Element, scroller } from 'react-scroll';
import Experience from './Experience';
import Contact from './Contact';
import WhoIAm from './WhoIAm';
import WhatIDo from './WhatIDo';
import VS from '../images/vs_1.png';
import SQL from '../images/sql_1.png';
import REACT from '../images/react.png';
import ELASTIC from '../images/elastic.png';
import NODE from '../images/nodejs.png';

export default class AppBody extends Component {
  constructor(props) {
    super(props);


    this._onAppSessionChange = this._onAppSessionChange.bind(this);
    this.state = {
      languageSet: this.props.languageSet
    }
  }

  _onAppSessionChange() {
    this.setState({ languageSet: AppStore.getLanguageSet() });
    var menu = AppStore.getMenuSelected();
    if (menu === 'HOME') {
      scroller.scrollTo(menu, {
        duration: 1000,
        delay: 0,
        smooth: true,
        offset: -40
      });
    }
  }

  render() {
    return (
      <div>
        <div className="App-header-back"></div>
        <Element name="HOME" />
        <WhoIAm languageSet={this.state.languageSet} />
        <WhatIDo languageSet={this.state.languageSet} />
        <div className="App-body-tools">
          <span><img src={VS} className="App-body-tools-img" alt="logo" /></span>
          <span><img src={SQL} className="App-body-tools-img" alt="logo" /></span>
          <span><img src={REACT} className="App-body-tools-img" alt="logo" /></span>
          <span><img src={ELASTIC} className="App-body-tools-img" alt="logo" /></span>
          <span><img src={NODE} className="App-body-tools-img" alt="logo" /></span>
        </div>
        <Experience languageSet={this.state.languageSet} />
        <Contact languageSet={this.state.languageSet} />
      </div>
    );
  }
}