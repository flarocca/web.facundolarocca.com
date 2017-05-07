import React, { Component } from 'react'
import { Element } from 'react-scroll'
import ResumeMobile from './ResumeMobile'
import ContactMobile from './ContactMobile'
import WhoIAmMobile from './WhoIAmMobile'
import WhatIDoMobile from './WhatIDoMobile'
import LanguageSelector from '../../containers/LanguageSelector'

export default class AppBodyMobile extends Component {
  render() {
    return (
      <div id='body-mobile'>
        <Element name='HOME' />
        <LanguageSelector
          initialLanguage={this.props.initialLanguage}
          style={{ zIndex: 1000, right: '0px', top: '20%' }}
          checkboxId={'language-mobile'}
          labelId={'languageLabel-mobile'}
          className={'Container row fixed'}
          float={'right-mobile'}
          labelTop={'7px'}
          containerDirection={'column'}
          containerStyle={{ marginBottom: '10%' }}
          langId={'lanItem-mobile'}
          langStyle={{ alignSelf: 'center' }} />
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
