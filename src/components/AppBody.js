import React, { Component } from 'react';
import AppStore from '../stores/AppStore';
import { Element, scroller } from 'react-scroll';
import Resume from './Resume';
import Contact from './Contact';
import WhoIAm from './WhoIAm';
import WhatIDo from './WhatIDo';
import ThemeSelector from './ThemeSelector';
import getAllThemes from '../constants/themes/getAllThemes';

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
    this.setState({
      languageSet: AppStore.getLanguageSet(),
      theme: AppStore.getThemeSelected()
    });

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
      <div id="body">
        <Element name="HOME" />
        <ThemeSelector theme={this.state.theme} themes={getAllThemes()} />
        <WhoIAm languageSet={this.state.languageSet} theme={this.state.theme} />
        <WhatIDo languageSet={this.state.languageSet} theme={this.state.theme} />
        <Resume languageSet={this.state.languageSet} theme={this.state.theme} />
        <Contact languageSet={this.state.languageSet} theme={this.state.theme} />
      </div>
    );
  }
}