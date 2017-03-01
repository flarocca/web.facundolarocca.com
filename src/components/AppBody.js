import React, { Component } from 'react'
import { Element } from 'react-scroll'
import Resume from './Resume'
import Contact from './Contact'
import WhoIAm from './WhoIAm'
import WhatIDo from './WhatIDo'
import ThemeSelector from './common/ThemeSelector'
import LanguageSelector from './common/LanguageSelector'
import MediaQuery from 'react-responsive'

export default class AppBody extends Component {
  render () {
    return (
      <div id='body'>
        <Element name='HOME' />
        <MediaQuery query='(max-width: 800px)'>
          <LanguageSelector
            initialLanguage={this.props.initialLanguage}
            style={{ left: '0px', top: '20%' }}
            checkboxId={'languageLeft'}
            labelId={'languageLabelLeft'}
            className={'Container row-reverse fixed main'}
            float={'left'} />
          <ThemeSelector position={'LEFT'} />
        </MediaQuery>
        <MediaQuery query='(min-width: 800px)'>
          <LanguageSelector
            initialLanguage={this.props.initialLanguage}
            style={{ right: '0px', top: '20%' }}
            checkboxId={'language'}
            labelId={'languageLabel'}
            className={'Container row fixed main'}
            float={'right'} />
          <ThemeSelector position={'RIGHT'} />
        </MediaQuery>
        <Element name='WHO_I_AM' />
        <WhoIAm languageSet={this.props.languageSet} theme={this.props.theme} />
        <Element name='WHAT_I_DO' />
        <WhatIDo languageSet={this.props.languageSet} theme={this.props.theme} />
        <Element name='RESUME' />
        <Resume languageSet={this.props.languageSet} theme={this.props.theme} />
        <Element name='CONTACT' />
        <Contact languageSet={this.props.languageSet} theme={this.props.theme} />
      </div>
    )
  }
}
