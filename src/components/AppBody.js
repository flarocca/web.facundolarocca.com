import React, { Component } from 'react';
import { Element } from 'react-scroll';
import Resume from './Resume';
import Contact from './Contact';
import WhoIAm from './WhoIAm';
import WhatIDo from './WhatIDo';
import ThemeSelector from './ThemeSelector';
import ThemeSelectorLeft from './ThemeSelectorLeft';
import LanguageSelector from './LanguageSelector';
import LanguageSelectorLeft from './LanguageSelectorLeft';
import getAllThemes from '../constants/themes/getAllThemes';
import MediaQuery from 'react-responsive';

export default class AppBody extends Component {
  render() {
    return (
      <div id="body">
        <Element name="HOME" /> 
        <MediaQuery query='(max-width: 800px)'>
          <LanguageSelectorLeft initialLanguage="ARG" />
          <ThemeSelectorLeft themes={getAllThemes()} />
        </MediaQuery>
        <MediaQuery query='(min-width: 800px)'>
          <LanguageSelector initialLanguage="ARG" />
          <ThemeSelector themes={getAllThemes()} />
        </MediaQuery>
        <WhoIAm languageSet={this.props.languageSet} theme={this.props.theme} />
        <WhatIDo languageSet={this.props.languageSet} theme={this.props.theme} />
        <Resume languageSet={this.props.languageSet} theme={this.props.theme} />
        <Contact languageSet={this.props.languageSet} theme={this.props.theme} />
      </div>
    );
  }
}