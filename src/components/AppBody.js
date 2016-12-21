import React, { Component } from 'react';
import '../css/App-body.css';
import AppStore from '../stores/AppStore';
import { Element, scroller } from 'react-scroll';

export default class AppBody extends Component {
  constructor(props) {
    super(props);

    this._onAppSessionChange = this._onAppSessionChange.bind(this);
    this._onClick = this._onClick.bind(this);
    this._firstNameChange = this._firstNameChange.bind(this);
    this._lastNameChange = this._lastNameChange.bind(this);
    this._emailChange = this._emailChange.bind(this);
    this._messageChange = this._messageChange.bind(this);
    this.state = {
      languageSet: this.props.languageSet,
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      firstNameClass: 'App-contact-input',
      lastNameClass: 'App-contact-input',
      emailNameClass: 'App-contact-input',
      messageNameClass: 'App-contact-textarea'
    }
  }

  componentDidMount() {
    AppStore.addChangeListener(this._onAppSessionChange);
  }

  _onClick() {
    if (!this.state.firstName) {
      this.setState({ firstNameClass: 'App-contact-input-error' });
    } else {
      this.setState({ firstNameClass: 'App-contact-input' });
    }

    if (!this.state.lastName) {
      this.setState({ lastNameClass: 'App-contact-input-error' });
    } else {
      this.setState({ lastNameClass: 'App-contact-input' });
    }

    if (!this.state.email) {
      this.setState({ emailNameClass: 'App-contact-input-error' });
    } else {
      this.setState({ emailNameClass: 'App-contact-input' });
    }

    if (!this.state.message) {
      this.setState({ messageNameClass: 'App-contact-textarea-error' });
    } else {
      this.setState({ messageNameClass: 'App-contact-textarea' });
    }

    if (this.state.firstName && this.state.lastName && this.state.email && this.state.message) {
      alert('Mail sent.');
      this.setState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        firstNameClass: 'App-contact-input',
        lastNameClass: 'App-contact-input',
        emailNameClass: 'App-contact-input',
        messageNameClass: 'App-contact-textarea'
      });
    }
  }

  _firstNameChange(e) {
    this.setState({ firstName: e.target.value });
  }

  _lastNameChange(e) {
    this.setState({ lastName: e.target.value });
  }

  _emailChange(e) {
    this.setState({ email: e.target.value });
  }

  _messageChange(e) {
    this.setState({ message: e.target.value });
  }

  _onAppSessionChange() {
    this.setState({ languageSet: AppStore.getLanguageSet() });
    var menu = AppStore.getMenuSelected();
    if (menu) {
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
      <div>
        <Element name="HOME" />
        <Element name="WHO_I_AM" />
        <span id="who_i_am" className="App-whoiam">
          <h2 style={{ color: '#222222', marginTop: '80px', marginBottom: '50px' }}>Facundo La Rocca</h2>
          <p className="App-intro">
            {this.state.languageSet.APP_UNDER_CONSTRUCTION}
          </p>
        </span>
        <Element name="EXPERIENCE" />
        <span id="experience" className="App-experience">
          <h2 style={{ color: '#ffffff', marginTop: '50px', marginBottom: '50px' }}>Facundo La Rocca</h2>
          <p className="App-intro">
            {this.state.languageSet.APP_UNDER_CONSTRUCTION}
          </p>
        </span>
        <Element name="CONTACT" />
        <div id="contact" className="App-contact">
          <h2 style={{ color: '#ffffff', marginTop: '50px', marginBottom: '50px' }}>{this.state.languageSet.CONTACT}</h2>
          <input value={this.state.firstName} onChange={this._firstNameChange} id="first-name" type="text" placeholder={this.state.languageSet.FIRST_NAME} className={this.state.firstNameClass} />
          <input value={this.state.lastName} onChange={this._lastNameChange} id="last-name" type="text" placeholder={this.state.languageSet.LAST_NAME} className={this.state.lastNameClass} />
          <input value={this.state.email} onChange={this._emailChange} id="mail" type="text" placeholder={this.state.languageSet.MAIL} className={this.state.emailNameClass} />
          <textarea value={this.state.message} onChange={this._messageChange} id="message" rows="5" placeholder={this.state.languageSet.MESSAGE} className={this.state.messageNameClass} />
          <button onClick={this._onClick} type='button' className="App-button"><b>{this.state.languageSet.SEND}</b></button>
        </div>
      </div>
    );
  }
}