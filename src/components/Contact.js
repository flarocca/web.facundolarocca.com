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
    this._renderMessageResult = this._renderMessageResult.bind(this);
    this.state = {
      resultMessage: null,
      resultClass: '',
      languageSet: this.props.languageSet,
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      firstNameClass: 'Input',
      lastNameClass: 'Input',
      emailNameClass: 'Input',
      messageNameClass: 'Textarea'
    }
  }

  componentDidMount() {
    AppStore.addChangeListener(this._onAppSessionChange);
  }

  _onClick() {
    if (!this.state.firstName) {
      this.setState({ firstNameClass: 'Input-error' });
    } else {
      this.setState({ firstNameClass: 'Input' });
    }

    if (!this.state.lastName) {
      this.setState({ lastNameClass: 'Input-error' });
    } else {
      this.setState({ lastNameClass: 'Input' });
    }

    if (!this.state.email) {
      this.setState({ emailNameClass: 'Input-error' });
    } else {
      this.setState({ emailNameClass: 'Input' });
    }

    if (!this.state.message) {
      this.setState({ messageNameClass: 'Textarea-error' });
    } else {
      this.setState({ messageNameClass: 'Textarea' });
    }

    if (this.state.firstName && this.state.lastName && this.state.email && this.state.message) {
      this.setState({
        resultMessage: this.state.languageSet.MESSAGE_SENT,
        resultClass: 'Mail-sent',
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        firstNameClass: 'Input',
        lastNameClass: 'Input',
        emailNameClass: 'Input',
        messageNameClass: 'Textarea'
      });
    } else {
      this.setState({
        resultMessage: this.state.languageSet.MESSAGE_ERROR,
        resultClass: 'Mail-error'
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
        <h2 style={{ color: '#ffffff', marginTop: '50px', marginBottom: '50px' }}>{this.state.languageSet.CONTACT}</h2>
        <div className="Contact">
          <input value={this.state.firstName} onChange={this._firstNameChange} id="first-name" type="text" placeholder={this.state.languageSet.FIRST_NAME} className={this.state.firstNameClass} />
          <input value={this.state.lastName} onChange={this._lastNameChange} id="last-name" type="text" placeholder={this.state.languageSet.LAST_NAME} className={this.state.lastNameClass} />
          <input value={this.state.email} onChange={this._emailChange} id="mail" type="text" placeholder={this.state.languageSet.MAIL} className={this.state.emailNameClass} />
          <textarea value={this.state.message} onChange={this._messageChange} id="message" rows="5" placeholder={this.state.languageSet.MESSAGE} className={this.state.messageNameClass} />
          <span className="Footer">
            {this._renderMessageResult()}
            <button onClick={this._onClick} type='button' className="Send"><b>{this.state.languageSet.SEND}</b></button>
          </span>
        </div>
      </div>
    );
  }
}