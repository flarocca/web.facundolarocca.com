import React, { Component } from 'react';
import AppStore from '../stores/AppStore';
import { Element, scroller } from 'react-scroll';
import Experience from './Experience';
import Contact from './Contact';
import WhoIAm from './WhoIAm';
import WhatIDo from './WhatIDo';
import ThemeSelector from './ThemeSelector';

export default class AppBody extends Component {
  constructor(props) {
    super(props);

    this._onAppSessionChange = this._onAppSessionChange.bind(this);
    this.state = {
      languageSet: this.props.languageSet,
      theme: this.props.theme
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
        <ThemeSelector mainColor="rgba(76, 165, 208, 1)" innerColor="rgba(245, 245, 245, 1)" backgroundColor="rgba(190, 190, 190, 1)" textColor="dimgray" />
        <WhoIAm languageSet={this.state.languageSet} theme={this.state.theme}/>
        <WhatIDo languageSet={this.state.languageSet} theme={this.state.theme}/>
        <Experience languageSet={this.state.languageSet} theme={this.state.theme}/>
        <Contact languageSet={this.state.languageSet} theme={this.state.theme}/>
      </div>
    );
  }
}