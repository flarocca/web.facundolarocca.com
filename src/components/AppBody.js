import React, { Component } from 'react';
import '../css/App-body.css';
import AppStore from '../stores/AppStore';
import { Element, scroller } from 'react-scroll';

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
    var menu = AppStore.getMenuSelected();
    if (menu) {
      scroller.scrollTo(menu, {
        duration: 1000,
        delay: 0,
        smooth: true,
      });
    }
  }

  render() {
    return (
      <div>
        <Element name="HOME" />
        <Element name="WHO_I_AM" />
        <span id="who_i_am" className="App-whoiam">
          <h2>Facundo La Rocca</h2>
          <p className="App-intro">
            {this.state.languageSet.APP_UNDER_CONSTRUCTION}
          </p>
        </span>
        <Element name="EXPERIENCE" />
        <span id="experience" className="App-experience">
          <h2>Facundo La Rocca</h2>
          <p className="App-intro">
            {this.state.languageSet.APP_UNDER_CONSTRUCTION}
          </p>
        </span>
        <Element name="CONTACT" />
        <div id="contact" className="App-contact">
          <h2 style={{ color: '#ffffff', marginTop: '50px', marginBottom: '50px' }}>{this.state.languageSet.CONTACT}</h2>
          <input id="first-name" type="text" placeholder={this.state.languageSet.FIRST_NAME} className="App-contact-input" />
          <input id="last-name" type="text" placeholder={this.state.languageSet.LAST_NAME} className="App-contact-input" />
          <input id="mail" type="text" placeholder={this.state.languageSet.MAIL} className="App-contact-input" />
          <textarea id="message" rows="5" placeholder={this.state.languageSet.MESSAGE} className="App-contact-textarea" />
          <button type='button' className="App-button"><b>{this.state.languageSet.SEND}</b></button>
        </div>
      </div>
    );
  }
}