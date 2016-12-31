import React, { Component } from 'react';
import AppStore from '../stores/AppStore';
import { Element, scroller } from 'react-scroll';

var styles = {
  footer: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end"
  }
}

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
      <em className="err-lbl">{field ? '' : message}</em>
    );
  }
  
  render() {
    return (
      <div className="Container column jc-center" style={{ marginBottom: "5%" }}>
        <Element name="CONTACT" />
        <h1 style={{ color: "rgba(76, 165, 208, 1)" }}>{this.state.languageSet.CONTACT}</h1>
        <hr />
        <div className="Container row" style={{ width: "70%", marginTop: "7%", alignSelf: "center"}}>
          <div className="Container column jc-left" style={{ width: "45%" }}>
            <p className="text-special" style={{ textAlign: "left", color: "gray" }}>
              <b style={{ color: "dimgray" }}>Facundo La Rocca</b>
              <br /><br />
              Software developer & engineer.
           </p>
          </div>
          <div className="Container column jc-left" style={{ width: "55%" }}>
            <div className="Container column" style={{ width: "60%" }}>
              <input className="input" style={{ border: "1px solid gray", backgroundColor: "white", color: "dimgray" }} value={this.state.firstName} onChange={this._firstNameChange} id="first-name" type="text" placeholder={this.state.languageSet.FIRST_NAME} />
              {this._renderRequiredFieldMsg(this.state.firstName, this.state.firstNameErrorMsg)}
              <input className="input" style={{ border: "1px solid gray", backgroundColor: "white", color: "dimgray" }} value={this.state.lastName} onChange={this._lastNameChange} id="last-name" type="text" placeholder={this.state.languageSet.LAST_NAME} />
              {this._renderRequiredFieldMsg(this.state.lastName, this.state.lastNameErrorMsg)}
              <input className="input" style={{ border: "1px solid gray", backgroundColor: "white", color: "dimgray" }} value={this.state.email} onChange={this._emailChange} id="mail" type="text" placeholder={this.state.languageSet.MAIL} />
              {this._renderRequiredFieldMsg(this.state.email, this.state.emailNameErrorMsg)}
              <textarea className="input" style={{ border: "1px solid gray", backgroundColor: "white", color: "dimgray", height: "120px" }} value={this.state.message} onChange={this._messageChange} id="message" rows="5" placeholder={this.state.languageSet.MESSAGE} />
              {this._renderRequiredFieldMsg(this.state.message, this.state.messageNameErrorMsg)}
              <span style={styles.footer}>
                <button onClick={this._onClick} type='button' className="container row jc-center button" style={{ width: "20%" }}><b style={{ color: "white" }}>{this.state.languageSet.SEND}</b></button>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}