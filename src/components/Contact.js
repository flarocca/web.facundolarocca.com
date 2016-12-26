import React, { Component } from 'react';
import '../css/Contact-section.css';
import AppStore from '../stores/AppStore';
import { Element, scroller } from 'react-scroll';
const INPUT_CLASS = 'App-contact-input';
const TEXTAREA_CLASS = 'App-contact-textarea';
const INPUT_ERROR_CLASS = 'App-contact-input-error';
const TEXTAREA_ERROR_CLASS = 'App-contact-textarea-error';

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this._onAppSessionChange = this._onAppSessionChange.bind(this);
    this._onClick = this._onClick.bind(this);
    this._firstNameChange = this._firstNameChange.bind(this);
    this._lastNameChange = this._lastNameChange.bind(this);
    this._emailChange = this._emailChange.bind(this);
    this._messageChange = this._messageChange.bind(this);
    this._renderMessageResult = this._renderMessageResult.bind(this);
    this.state = {
      resultMessage: null,
      resultClass: '',
      languageSet: this.props.languageSet,
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      firstNameClass: INPUT_CLASS,
      lastNameClass: INPUT_CLASS,
      emailNameClass: INPUT_CLASS,
      messageNameClass: TEXTAREA_CLASS
    }
  }

  componentDidMount() {
    AppStore.addChangeListener(this._onAppSessionChange);
  }

  _onClick() {
    this.setState({firstNameClass: !this.state.firstName ? INPUT_ERROR_CLASS : INPUT_CLASS});
    this.setState({lastNameClass: !this.state.lastName ? INPUT_ERROR_CLASS : INPUT_CLASS});
    this.setState({emailNameClass: !this.state.email ? INPUT_ERROR_CLASS : INPUT_CLASS});
    this.setState({messageNameClass: !this.state.message ? TEXTAREA_ERROR_CLASS : TEXTAREA_CLASS});

    if (this.state.firstName && this.state.lastName && this.state.email && this.state.message) {
      this.setState({
        resultMessage: this.state.languageSet.MESSAGE_SENT,
        resultClass: 'App-contact-mail-sent',
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        firstNameClass: INPUT_CLASS,
        lastNameClass: INPUT_CLASS,
        emailNameClass: INPUT_CLASS,
        messageNameClass: TEXTAREA_CLASS
      });
    } else {
      this.setState({
        resultMessage: this.state.languageSet.MESSAGE_ERROR,
        resultClass: 'App-contact-mail-error'
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
    if (menu === 'CONTACT') {
      scroller.scrollTo(menu, {
        duration: 1000,
        delay: 0,
        smooth: true,
        offset: -40
      });
    }
  }

  _renderMessageResult() {
    if (!this.state.resultMessage)
      return null;

    return (
      <b className={this.state.resultClass}>{this.state.resultMessage}</b>
    );
  }

  render() {
    return (
      <div className="App-contact">
        <Element name="CONTACT" />
        <h2 style={{ color: '#ffffff', marginTop: '50px' }}>{this.state.languageSet.CONTACT}</h2>
        <hr />
        <div className="App-contact-frame">
          <input value={this.state.firstName} onChange={this._firstNameChange} id="first-name" type="text" placeholder={this.state.languageSet.FIRST_NAME} className={this.state.firstNameClass} />
          <input value={this.state.lastName} onChange={this._lastNameChange} id="last-name" type="text" placeholder={this.state.languageSet.LAST_NAME} className={this.state.lastNameClass} />
          <input value={this.state.email} onChange={this._emailChange} id="mail" type="text" placeholder={this.state.languageSet.MAIL} className={this.state.emailNameClass} />
          <textarea value={this.state.message} onChange={this._messageChange} id="message" rows="5" placeholder={this.state.languageSet.MESSAGE} className={this.state.messageNameClass} />
          <span className="App-contact-footer">
            {this._renderMessageResult()}
            <button onClick={this._onClick} type='button' className="App-contact-send"><b>{this.state.languageSet.SEND}</b></button>
          </span>
        </div>
      </div>
    );
  }
}