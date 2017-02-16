import React, { Component } from 'react';
import { Element } from 'react-scroll';
import ResumeMobile from './ResumeMobile';
import ContactMobile from './ContactMobile';
import WhoIAmMobile from './WhoIAmMobile';
import WhatIDoMobile from './WhatIDoMobile';
import LanguageSelectorMobile from './LanguageSelectorMobile';

export default class AppBodyMobile extends Component {
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