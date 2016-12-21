import React, { Component } from 'react';
import '../css/UpButton.css';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';
import ImageProvider from '../services/ImageProvider';
import { scroller } from 'react-scroll';

export default class UpButton extends Component {
  constructor(props) {
    super(props);

    // this._onAppSessionChange = this._onAppSessionChange.bind(this);
    this._imageProvider = new ImageProvider();
    this._goToHome = this._goToHome.bind(this);
  }

  componentDidMount() {
    // AppStore.addChangeListener(this._onAppSessionChange);
  }

  // _onAppSessionChange() {
  //   this.setState({ languageSet: AppStore.getLanguageSet() });
  // }

  _goToHome() {
    scroller.scrollTo('Home', {
      duration: 1000,
      delay: 0,
      smooth: true,
    });
  }

  render() {
    return (
      <span className="App-up-btn-span">
        <a href="#" onClick={this._goToHome} className="App-up-btn-link">
          <img src={this._imageProvider.getImage('UPW')} className="App-up-btn" alt="logo" />
        </a>
      </span>
    );
  }
}