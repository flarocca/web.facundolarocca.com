import React, { Component } from 'react';
import '../css/App.css';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import AppBody from './AppBody';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';

class App extends Component {
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
      <div className="App">
        <AppHeader languageSet={this.state.languageSet} />
        <AppBody languageSet={this.state.languageSet} />
        <AppFooter languageSet={this.state.languageSet} />
      </div>
    );
  }
}

export default App;
