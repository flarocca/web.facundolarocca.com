import React, { Component } from 'react';
import '../css/App-body.css';
import AppStore from '../stores/AppStore';

export default class AppBody extends Component {
  constructor(props) {
    super(props);

    this._onAppSessionChange = this._onAppSessionChange.bind(this);
    this.state = {
      languageSet: this.props.languageSet
    }
  }

  componentDidMount() {
    AppStore.addChangeListener(this._onAppSessionChange);
  }

  _onAppSessionChange() {
    this.setState({ languageSet: AppStore.getLanguageSet() });
  }

  render() {
    return (
      <div>
        <h2>Facundo La Rocca</h2>
        <p className="App-intro">
          {this.state.languageSet.APP_UNDER_CONSTRUCTION}
        </p>
        <span id="who_i_am" className="App-whoiam">
          <p>{this.state.languageSet.APP_UNDER_CONSTRUCTION}</p>
          <p>{this.state.languageSet.APP_UNDER_CONSTRUCTION}</p>
          <p>{this.state.languageSet.APP_UNDER_CONSTRUCTION}</p>
          <p>{this.state.languageSet.APP_UNDER_CONSTRUCTION}</p>
          <p>{this.state.languageSet.APP_UNDER_CONSTRUCTION}</p>
        </span>
        <span id="experience" className="App-experience">
          <p>{this.state.languageSet.APP_UNDER_CONSTRUCTION}</p>
          <p>{this.state.languageSet.APP_UNDER_CONSTRUCTION}</p>
          <p>{this.state.languageSet.APP_UNDER_CONSTRUCTION}</p>
          <p>{this.state.languageSet.APP_UNDER_CONSTRUCTION}</p>
          <p>{this.state.languageSet.APP_UNDER_CONSTRUCTION}</p>
        </span>
        <span id="contact" className="App-contact">
          <label for="first-name">{this.state.languageSet.FIRST_NAME}</label>
          <input id="first-name" type="text" placeholder={this.state.languageSet.FIRST_NAME} className="App-contact-input" />
          <label for="last-name">{this.state.languageSet.LAST_NAME}</label>
          <input id="last-name" type="text" placeholder={this.state.languageSet.LAST_NAME} className="App-contact-input" />
          <label for="mail">{this.state.languageSet.MAIL}</label>
          <input id="mail" type="text" placeholder={this.state.languageSet.MAIL} className="App-contact-input" />
          <label for="message">{this.state.languageSet.MESSAGE}</label>
          <textarea id="message" rows="5" placeholder={this.state.languageSet.MESSAGE} className="App-contact-textarea" />
          <button type='button' className="App-button">{this.state.languageSet.SEND}</button>
        </span>
      </div>
    );
  }
}