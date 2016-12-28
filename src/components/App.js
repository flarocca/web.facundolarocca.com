import React, { Component } from 'react';
import '../css/App.css';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import AppBody from './AppBody';
import UpButton from './UpButton';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';
import { Element } from 'react-scroll';

export default class App extends Component {
  constructor(props) {
    super(props);

    this._onAppSessionChange = this._onAppSessionChange.bind(this);
    this.state = {
      languageSet: AppStore.getLanguageSet()
    };
  }

  componentDidMount() {
    AppStore.addChangeListener(this._onAppSessionChange);
    AppActions.initializeApp();
  }

  _onAppSessionChange() {
    this.setState({ languageSet: AppStore.getLanguageSet() });
  }

  render() {
    return (
      <div className="App" style={{ backgroundColor: "rgba(60, 60, 60, 1)" }}>
        <Element name="TOP" />
        <div className="Container column co-medium" style={{backgroundColor: "rgba(245, 245, 245, 1)"}}>
          <div className="pre-hdr">This is a pre header section</div>
          <AppHeader languageSet={this.state.languageSet} />
          <AppBody languageSet={this.state.languageSet} />
          <AppFooter languageSet={this.state.languageSet} />
          <UpButton />
        </div>
      </div>
    );
  }
}