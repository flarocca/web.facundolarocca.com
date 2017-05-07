import React, { Component } from 'react'
import { Element } from 'react-scroll'
import Resume from '../components/Resume'
import Contact from './Contact'
import WhoIAm from '../components/WhoIAm'
import WhatIDo from '../components/WhatIDo'
import ThemeSelector from '../components/common/ThemeSelector'
import LanguageSelector from './LanguageSelector'
import MediaQuery from 'react-responsive'

export default class AppBody extends Component {
  render() {
    return (
      <div id='body'>
        <Element name='HOME' />
        <MediaQuery query='(max-width: 800px)'>
          {this._getLanguageSelector({ left: '0px', top: '20%' }, 'languageLeft', 'languageLabelLeft', 'Container row-reverse fixed main', 'left')}
          <ThemeSelector position={'LEFT'} />
        </MediaQuery>
        <MediaQuery query='(min-width: 800px)'>
          {this._getLanguageSelector({ right: '0px', top: '20%' }, 'language', 'languageLabel', 'Container row fixed main', 'right')}
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

  _getLanguageSelector(style, checkboxId, labelId, className, float) {
    return (
      <LanguageSelector
        initialLanguage={this.props.initialLanguage}
        style={style}
        checkboxId={checkboxId}
        labelId={labelId}
        className={className}
        float={float}
        labelTop={'12px'}
        containerDirection={'row'}
        containerStyle={{ height: '80px', marginRight: '10%', marginLeft: '10%' }}
        langId={'lanItem'}
        langStyle={{ marginRight: '10%' }} />
    )
  }
}
