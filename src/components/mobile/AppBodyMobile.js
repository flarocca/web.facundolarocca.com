import React, { Component } from 'react';
import AppStore from '../../stores/AppStore';
import { Element, scroller } from 'react-scroll';
import ResumeMobile from './ResumeMobile';
import ContactMobile from './ContactMobile';
import WhoIAmMobile from './WhoIAmMobile';
import WhatIDoMobile from './WhatIDoMobile';
import LanguageSelectorMobile from './LanguageSelectorMobile';

export default class AppBodyMobile extends Component {
  constructor(props) {
    super(props);

    this._onStoreChange = this._onStoreChange.bind(this);
  }

  _onStoreChange() {
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
        <WhoIAmMobile languageSet={this.props.languageSet} theme={this.props.theme} />
        <WhatIDoMobile languageSet={this.props.languageSet} theme={this.props.theme} />
        <ResumeMobile languageSet={this.props.languageSet} theme={this.props.theme} />
        <ContactMobile languageSet={this.props.languageSet} theme={this.props.theme} />
      </div>
    );
  }
}