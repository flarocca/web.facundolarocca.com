import React, { Component } from 'react'
import { Element } from 'react-scroll'
import ResumeMobile from './ResumeMobile'
import ContactMobile from './ContactMobile'
import WhoIAmMobile from './WhoIAmMobile'
import WhatIDoMobile from './WhatIDoMobile'
import LanguageSelectorMobile from './LanguageSelectorMobile'

export default class AppBodyMobile extends Component {

  render () {
    return (
      <div id='body-mobile'>
        <Element name='HOME' />
        <LanguageSelectorMobile initialLanguage={this.props.initialLanguage} />
        <Element name='WHO_I_AM' />
        <WhoIAmMobile languageSet={this.props.languageSet} theme={this.props.theme} />
        <Element name='WHAT_I_DO' />
        <WhatIDoMobile languageSet={this.props.languageSet} theme={this.props.theme} />
        <Element name='RESUME' />
        <ResumeMobile languageSet={this.props.languageSet} theme={this.props.theme} />
        <Element name='CONTACT' />
        <ContactMobile languageSet={this.props.languageSet} theme={this.props.theme} />
      </div>
    )
  }
}
