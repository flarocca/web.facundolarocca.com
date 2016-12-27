import React, { Component } from 'react';
import '../css/Contact-section.css';
import AppStore from '../stores/AppStore';
import { Element, scroller } from 'react-scroll';

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this._onAppSessionChange = this._onAppSessionChange.bind(this);
    this._onClick = this._onClick.bind(this);
    this._firstNameChange = this._firstNameChange.bind(this);
    this._lastNameChange = this._lastNameChange.bind(this);
    this._emailChange = this._emailChange.bind(this);
    this._messageChange = this._messageChange.bind(this);
    this._renderRequiredFieldMsg = this._renderRequiredFieldMsg.bind(this);
    this.state = {
      firstNameErrorMsg: '',
      lastNameErrorMsg: '',
      emailNameErrorMsg: '',
      messageNameErrorMsg: '',
      languageSet: this.props.languageSet,
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    }
  }

  componentDidMount() {
    AppStore.addChangeListener(this._onAppSessionChange);
  }

  _onClick() {
    this.setState({ firstNameErrorMsg: !this.state.firstName ? this.state.languageSet.FIELD_REQUIRED_MSG : '' });
    this.setState({ lastNameErrorMsg: !this.state.lastName ? this.state.languageSet.FIELD_REQUIRED_MSG : '' });
    this.setState({ emailNameErrorMsg: !this.state.email ? this.state.languageSet.FIELD_REQUIRED_MSG : '' });
    this.setState({ messageNameErrorMsg: !this.state.message ? this.state.languageSet.FIELD_REQUIRED_MSG : '' });

    if (this.state.firstName && this.state.lastName && this.state.email && this.state.message) {
      this.setState({
        firstNameErrorMsg: '',
        lastNameErrorMsg: '',
        emailNameErrorMsg: '',
        messageNameErrorMsg: '',
        firstName: '',
        lastName: '',
        email: '',
        message: ''
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

  _renderRequiredFieldMsg(field, message) {
    if (field)
      return null;

    return (
      <em className="Error-label">{message}</em>
    );
  }

  render() {
    return (
      <div className="App-contact">
        <Element name="CONTACT" />
        <p className="Section-title">{this.state.languageSet.CONTACT}</p>
        <hr />
        <div className="App-contact-frame">
          <input value={this.state.firstName} onChange={this._firstNameChange} id="first-name" type="text" placeholder={this.state.languageSet.FIRST_NAME} className="App-contact-input" />
          {this._renderRequiredFieldMsg(this.state.firstName, this.state.firstNameErrorMsg)}
          <input value={this.state.lastName} onChange={this._lastNameChange} id="last-name" type="text" placeholder={this.state.languageSet.LAST_NAME} className="App-contact-input" />
          {this._renderRequiredFieldMsg(this.state.lastName, this.state.lastNameErrorMsg)}
          <input value={this.state.email} onChange={this._emailChange} id="mail" type="text" placeholder={this.state.languageSet.MAIL} className="App-contact-input" />
          {this._renderRequiredFieldMsg(this.state.email, this.state.emailNameErrorMsg)}
          <textarea value={this.state.message} onChange={this._messageChange} id="message" rows="5" placeholder={this.state.languageSet.MESSAGE} className="App-contact-textarea" />
          {this._renderRequiredFieldMsg(this.state.message, this.state.messageNameErrorMsg)}
          <span className="App-contact-footer">
            <button onClick={this._onClick} type='button' className="App-contact-send"><b>{this.state.languageSet.SEND}</b></button>
          </span>
        </div>
      </div>
    );
  }
}