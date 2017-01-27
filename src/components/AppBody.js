import React, { Component } from 'react';
import AppStore from '../stores/AppStore';
import { Element, scroller } from 'react-scroll';
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
  constructor(props) {
    super(props);

    this._onStoreChange = this._onStoreChange.bind(this);
    this.state = {
      languageSet: this.props.languageSet,
      theme: this.props.theme
    }
  }

  _onStoreChange() {
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
        <MediaQuery query='(max-width: 800px)'>
          <LanguageSelectorLeft initialLanguage="ARG" />
          <ThemeSelectorLeft themes={getAllThemes()} />
        </MediaQuery>
        <MediaQuery query='(min-width: 800px)'>
          <LanguageSelector initialLanguage="ARG" />
          <ThemeSelector themes={getAllThemes()} />
        </MediaQuery>
        <WhoIAm languageSet={this.state.languageSet} theme={this.state.theme} />
        <WhatIDo languageSet={this.state.languageSet} theme={this.state.theme} />
        <Resume languageSet={this.state.languageSet} theme={this.state.theme} />
        <Contact languageSet={this.state.languageSet} theme={this.state.theme} />
      </div>
    );
  }
}