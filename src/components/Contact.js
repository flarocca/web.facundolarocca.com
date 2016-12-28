import React, { Component } from 'react';
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
    return (
      <em style={styles.errorLabel}>{field ? '' : message}</em>
    );
  }

  render() {
    return (
      <div style={styles.container}>
        <Element name="CONTACT" />
        <p className="Section-title">{this.state.languageSet.CONTACT}</p>
        <hr />
        <div style={styles.frame}>
          <input value={this.state.firstName} onChange={this._firstNameChange} id="first-name" type="text" placeholder={this.state.languageSet.FIRST_NAME} style={styles.input} />
          {this._renderRequiredFieldMsg(this.state.firstName, this.state.firstNameErrorMsg)}
          <input value={this.state.lastName} onChange={this._lastNameChange} id="last-name" type="text" placeholder={this.state.languageSet.LAST_NAME} style={styles.input} />
          {this._renderRequiredFieldMsg(this.state.lastName, this.state.lastNameErrorMsg)}
          <input value={this.state.email} onChange={this._emailChange} id="mail" type="text" placeholder={this.state.languageSet.MAIL} style={styles.input} />
          {this._renderRequiredFieldMsg(this.state.email, this.state.emailNameErrorMsg)}
          <textarea value={this.state.message} onChange={this._messageChange} id="message" rows="5" placeholder={this.state.languageSet.MESSAGE} style={{ ...styles.input, ...{ height: "150px" } }} />
          {this._renderRequiredFieldMsg(this.state.message, this.state.messageNameErrorMsg)}
          <span style={styles.footer}>
            <button onClick={this._onClick} type='button' className="App-contact-send"><b>{this.state.languageSet.SEND}</b></button>
          </span>
        </div>
      </div>
    );
  }
}

var styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgba(34, 34, 34, 1)",
    justifyContent: "center",
    textAlign: "center"
  },
  frame: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgba(34, 34, 34, 1)",
    width: "40%",
    marginTop: "3%",
    alignSelf: "center"
  },
  input: {
    flex: 1,
    fontSize: "large",
    height: "25px",
    borderRadius: "5px",
    border: "rgba(255, 255, 255, 0) solid",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    paddingLeft: "1%",
    paddingRight: "1%",
    marginTop: "3%",
    color: "white"
  },
  errorLabel: {
    color: "red",
    alignSelf: "flex-start",
    marginTop: "1%",
    marginBottom: "0.5%",
    marginLeft: "2%"
  },
  footer: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end"
  }
  // send: {
  //   display: "block",
  //   backgroundColor: "transparent",
  //   height: "40px",
  //   width: "100px",
  //   border: "2px solid rgba(255, 255, 255, 0.50)",
  //   borderRadius: "10px",
  //   color: "rgba(255, 255, 255, 0.50)",
  //   fontSize: "medium",
  //   alignSelf: "flex-end",
  //   transition: "all 200ms ease-in"
  // }
}