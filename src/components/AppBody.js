import React, { Component } from 'react';
import AppStore from '../stores/AppStore';
import { Element, scroller } from 'react-scroll';
import Experience from './Experience';
import Contact from './Contact';
import WhoIAm from './WhoIAm';
import WhatIDo from './WhatIDo';

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
        <Element name="HOME" />
        <WhoIAm languageSet={this.state.languageSet} />
        <WhatIDo languageSet={this.state.languageSet} />
        <Experience languageSet={this.state.languageSet} />
        <Contact languageSet={this.state.languageSet} />
      </div>
    );
  }
}