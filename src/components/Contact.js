import React, { Component } from 'react';
import AppStore from '../stores/AppStore';
import AppActions from '../actions/AppActions';
import isElementInViewport from '../helpers/isElementInViewport';
import { Element, scroller } from 'react-scroll';

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this._onStoreChange = this._onStoreChange.bind(this);
    this._onClick = this._onClick.bind(this);
    this._onScroll = this._onScroll.bind(this);
    this._firstNameChange = this._firstNameChange.bind(this);
    this._lastNameChange = this._lastNameChange.bind(this);
    this._emailChange = this._emailChange.bind(this);
    this._messageChange = this._messageChange.bind(this);
    this._renderRequiredFieldMsg = this._renderRequiredFieldMsg.bind(this);
    this._renderSendButton = this._renderSendButton.bind(this);
    this._renderSendMessage = this._renderSendMessage.bind(this);

    this.state = {
      firstNameErrorMsg: '',
      lastNameErrorMsg: '',
      emailNameErrorMsg: '',
      messageNameErrorMsg: '',
      languageSet: this.props.languageSet,
      theme: this.props.theme,
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      checked: false,
      isSendingMail: false,
      errorSendingMail: '',
      mailSent: false
    }
  }

  componentDidMount() {
    AppStore.addChangeListener(this._onStoreChange);
    window.addEventListener('scroll', this._onScroll);
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onStoreChange);
    window.removeEventListener('scroll', this._onScroll, false);
  }

  _onScroll(event) {
    let isInViewport = isElementInViewport(this.refs.title);
    if (isInViewport && !this.state.checked) {
      this.setState({ checked: true });
    }
  }

  _onClick() {
    this.setState({ firstNameErrorMsg: !this.state.firstName ? this.state.languageSet.FIELD_REQUIRED_MSG : '' });
    this.setState({ lastNameErrorMsg: !this.state.lastName ? this.state.languageSet.FIELD_REQUIRED_MSG : '' });
    this.setState({ emailNameErrorMsg: !this.state.email ? this.state.languageSet.FIELD_REQUIRED_MSG : '' });
    this.setState({ messageNameErrorMsg: !this.state.message ? this.state.languageSet.FIELD_REQUIRED_MSG : '' });

    if (this.state.firstName && this.state.lastName && this.state.email && this.state.message) {
      AppActions.sendMail(this.state.firstName, this.state.lastName, this.state.message, this.state.email);
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

  _onStoreChange() {
    this.setState({
      languageSet: AppStore.getLanguageSet(),
      theme: AppStore.getThemeSelected(),
      isSendingMail: AppStore.isSendingMail(),
      errorSendingMail: AppStore.getErrorSendingMail(),
      mailSent: AppStore.mailSent()
    }, () => {
      if (!this.state.isSendingMail && !this.state.errorSendingMail)
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
    });

    var menu = AppStore.getMenuSelected();
    if (menu === 'CONTACT') {
      scroller.scrollTo(menu, {
        duration: 1000,
        delay: 0,
        smooth: true,
        offset: -50
      });
    }
  }

  _renderRequiredFieldMsg(field, message) {
    return (
      <em className="err-lbl">{field ? '' : message}</em>
    );
  }

  _renderSendButton() {
    if (this.state.isSendingMail)
      return (
        <button onClick={this._onClick} type='button' className="jc-center button" style={{ alignSelf: "flex-end", color: "white", width: "40%", backgroundColor: this.state.theme.COLOR_4 }}>
          <i className="fa fa-spinner fa-pulse fa-1x fa-fw" style={{ marginRight: "3px" }}></i>
          <span>{this.state.languageSet.SENDING}</span>
        </button>
      );

    return (
      <button onClick={this._onClick} type='button' className="jc-center button" style={{ alignSelf: "flex-end", width: "40%", backgroundColor: this.state.theme.COLOR_4 }}><b style={{ color: "white" }}>{this.state.languageSet.SEND}</b></button>
    );
  }

  _renderSendMessage() {
    if (this.state.mailSent)
      return (
        <div className="column" style={{ flex: "1" }}><em>{this.state.languageSet.MESSAGE_SENT}</em></div>
      );

    if (!this.state.mailSent && this.state.errorSendingMail)
      return (
        <div className="column" style={{ flex: "1" }}><em>{this.state.errorSendingMail}</em></div>
      );

    return null;
  }

  render() {
    return (
      <div id="contact" className="Container column jc-center" style={{ backgroundColor: this.state.theme.BACKGROUND_COLOR }}>
        <Element name="CONTACT" />
        <span style={{ textAlign: "left", fontSize: "40px", color: this.state.theme.COLOR_4 }}>
          <input type="checkbox" id="Contact-chk" style={{ display: "none" }} checked={this.state.checked} />
          <b id="Contact-title" ref="title">{this.state.languageSet.CONTACT}</b>
        </span>
        <hr />
        <div className="Container row" style={{ marginTop: "30px", alignSelf: "center", width: "100%" }}>
          <div id="personal-information" className="Container column jc-left" style={{ width: "45%" }}>
            <b style={{ alignSelf: "flex-start", color: this.state.theme.COLOR_4 }}>{this.state.languageSet.CONTACT_INFORMATION}</b>
            <p className="text-special" style={{ textAlign: "left", color: "gray" }}>
              <i className="fa fa-user">
                <b style={{ color: this.state.theme.FONT_COLOR, fontSize: "small", fontFamily: "'Open Sans', Helvetica, sans-serif", paddingLeft: "10px" }}>Facundo La Rocca</b>
              </i>
              <br />
              <em style={{ color: this.state.theme.FONT_COLOR, fontSize: "small", fontFamily: "'Open Sans', Helvetica, sans-serif", paddingLeft: "7%" }}>Software engineering & development.</em>
              <br />
              <br />
              <i className="fa fa-envelope-o">
                <span style={{ color: this.state.theme.FONT_COLOR, fontSize: "small", fontFamily: "'Open Sans', Helvetica, sans-serif", paddingLeft: "10px" }}>facundo_larocca@yahoo.com.ar<br /></span>
              </i>
            </p>
          </div>
          <div style={{ width: "1px", border: "2px #B4B2B2 solid", backgroundColor: "#B4B2B2" }} />
          <div className="Container column jc-left" style={{ paddingLeft: "5%", width: "55%" }}>
            <b style={{ alignSelf: "flex-start", color: this.state.theme.COLOR_4 }}>{this.state.languageSet.SEND_ME_A_MESSAGE}</b>
            <div className="Container column">
              <div className="Container row" style={{ width: "100%" }}>
                <div className="Container column" style={{ width: "50%" }}>
                  <input className="input" style={{ marginRight: "1.5%", backgroundColor: this.state.theme.TEXTBOX_COLOR, color: this.state.theme.FONT_COLOR }} value={this.state.firstName} onChange={this._firstNameChange} id="first-name" type="text" placeholder={this.state.languageSet.FIRST_NAME} />
                  {this._renderRequiredFieldMsg(this.state.firstName, this.state.firstNameErrorMsg)}
                </div>
                <div className="Container column" style={{ width: "50%" }}>
                  <input className="input" style={{ marginLeft: "1.5%", backgroundColor: this.state.theme.TEXTBOX_COLOR, color: this.state.theme.FONT_COLOR }} value={this.state.lastName} onChange={this._lastNameChange} id="last-name" type="text" placeholder={this.state.languageSet.LAST_NAME} />
                  {this._renderRequiredFieldMsg(this.state.lastName, this.state.lastNameErrorMsg)}
                </div>
              </div>
              <input className="input" style={{ backgroundColor: this.state.theme.TEXTBOX_COLOR, color: this.state.theme.FONT_COLOR }} value={this.state.email} onChange={this._emailChange} id="mail" type="text" placeholder={this.state.languageSet.MAIL} />
              {this._renderRequiredFieldMsg(this.state.email, this.state.emailNameErrorMsg)}
              <textarea className="input" style={{ backgroundColor: this.state.theme.TEXTBOX_COLOR, color: this.state.theme.FONT_COLOR, height: "120px" }} value={this.state.message} onChange={this._messageChange} id="message" rows="5" placeholder={this.state.languageSet.MESSAGE} />
              {this._renderRequiredFieldMsg(this.state.message, this.state.messageNameErrorMsg)}
              <div className="Container row jc-right" style={{ marginTop: "5%", textAlign: "left" }}>
                {this._renderSendMessage()}
                {this._renderSendButton()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}