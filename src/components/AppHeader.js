import React, { Component } from 'react';
import AppLanguagueSelector from './AppLanguagueSelector';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';
import ImageProvider from '../services/ImageProvider';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class AppHeader extends Component {
  constructor(props) {
    super(props);

    this._imageProvider = new ImageProvider();
    this._onAppSessionChange = this._onAppSessionChange.bind(this);
    this._onClick = this._onClick.bind(this);
    this.state = {
      languageSet: this.props.languageSet,
      on: false
    }
  }

  componentDidMount() {
    AppStore.addChangeListener(this._onAppSessionChange);
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.menu}>
          <a href="#" onClick={() => this._onClick('WHO_I_AM')} style={styles.item}><b>{this.state.languageSet.WHO_I_AM}</b></a>
          <a href="#" onClick={() => this._onClick('WHAT_I_DO')} style={styles.item}><b>{this.state.languageSet.WHAT_I_DO}</b></a>
          <a href="#" onClick={() => this._onClick('EXPERIENCE')} style={styles.item}><b>{this.state.languageSet.EXPERIENCE}</b></a>
          <a href="#" onClick={() => this._onClick('CONTACT')} style={styles.item}><b>{this.state.languageSet.CONTACT}</b></a>
        </div>
        <AppLanguagueSelector style={styles.language} />
      </div>
    );
  }

  _onAppSessionChange() {
    this.setState({ languageSet: AppStore.getLanguageSet() });
  }

  _onClick(id) {
    AppActions.menuSelected(id);
  }
}

var styles = {
  container: {
    backgroundColor: "rgba(34, 34, 34, 1)",
    height: "5%",
    width: "100%",
    padding: "1%",
    position: "fixed",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  menu: {
    flex: 5
  },
  item: {
    margin: "2%",
    fontSize: "large",
    textDecoration: "none",
    color: "white"
  },
  language: {
    flex: 1
  }
}