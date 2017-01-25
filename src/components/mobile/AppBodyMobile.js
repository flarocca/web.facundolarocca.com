import React, { Component } from 'react';
import AppStore from '../../stores/AppStore';
import { Element, scroller } from 'react-scroll';
import ResumeMobile from './ResumeMobile';
import ContactMobile from './ContactMobile';
import WhoIAmMobile from './WhoIAmMobile';
import WhatIDoMobile from './WhatIDoMobile';
import ThemeSelector from '../ThemeSelector';
import LanguageSelectorMobile from './LanguageSelectorMobile';
import getAllThemes from '../../constants/themes/getAllThemes';
import MediaQuery from 'react-responsive';

export default class AppBodyMobile extends Component {
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
      <div id="body-mobile">
        <Element name="HOME" />
        <LanguageSelectorMobile initialLanguage="ARG" />
        <WhoIAmMobile languageSet={this.state.languageSet} theme={this.state.theme} />
        <WhatIDoMobile languageSet={this.state.languageSet} theme={this.state.theme} />
        <ResumeMobile languageSet={this.state.languageSet} theme={this.state.theme} />
        <ContactMobile languageSet={this.state.languageSet} theme={this.state.theme} />
      </div>
    );
  }
}