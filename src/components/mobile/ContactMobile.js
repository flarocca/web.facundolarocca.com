import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as ContactActions from '../../actions/ContactActions'
import SectionTitleMobile from '../common/SectionTitleMobile'
import SendButton from '../SendButton'

class ContactMobile extends Component {
  constructor(props) {
    super(props)

    this._onClick = this._onClick.bind(this)
    this._renderSendMessage = this._renderSendMessage.bind(this)
  }

  _onClick() {
    this.props.dispatch(ContactActions.sendMail(this.refs.firstName.value, this.refs.lastName.value, this.refs.message.value, this.refs.email.value))
  }

  _renderRequiredFieldMsg(field, message) {
    return (
      <em className='err-lbl'>{field ? '' : message}</em>
    )
  }

  _renderSendMessage() {
    if (this.props.mailSent) {
      return (
        <div className='column' style={{ flex: '1' }}><em>{this.props.languageSet.MESSAGE_SENT}</em></div>
      )
    }

    if (!this.props.mailSent && this.props.errorSendingMail) {
      return (
        <div className='column' style={{ flex: '1' }}><em>{this.props.errorSendingMail}</em></div>
      )
    }

    return null
  }

  render() {
    return (
      <div id='contact-mobile' className='Container column jc-center' style={{ backgroundColor: this.props.theme.BACKGROUND_COLOR }}>
        <SectionTitleMobile color={this.props.theme.COLOR_4} id={'Contact'} title={this.props.languageSet.CONTACT} />
        <div className='Container column' style={{ alignSelf: 'center', width: '100%' }}>
          <div id='personal-information' className='Container column jc-left'>
            <b className='contact-section-title-mobile' style={{ color: this.props.theme.COLOR_4 }}>{this.props.languageSet.CONTACT_INFORMATION}</b>
            <p className='text-special' style={{ textAlign: 'left', color: 'gray' }}>
              <i className='fa fa-user'>
                <b style={{ color: this.props.theme.FONT_COLOR, fontSize: 'small', fontFamily: "'Open Sans', Helvetica, sans-serif", paddingLeft: '10px' }}>Facundo La Rocca</b>
              </i>
              <br />
              <em style={{ color: this.props.theme.FONT_COLOR, fontSize: 'small', fontFamily: "'Open Sans', Helvetica, sans-serif", paddingLeft: '7%' }}>Software engineering & development.</em>
              <br />
              <br />
              <i className='fa fa-envelope-o'>
                <span style={{ color: this.props.theme.FONT_COLOR, fontSize: 'small', fontFamily: "'Open Sans', Helvetica, sans-serif", paddingLeft: '10px' }}>facu.larocca@gmail.com<br /></span>
              </i>
            </p>
          </div>
          <div className='Container column jc-left' style={{ paddingTop: '5%' }}>
            <b className='contact-section-title-mobile' style={{ color: this.props.theme.COLOR_4 }}>{this.props.languageSet.SEND_ME_A_MESSAGE}</b>
            <div className='Container column'>
              <div className='Container row' style={{ width: '100%' }}>
                <div className='Container column' style={{ width: '50%' }}>
                  <input ref='firstName' className='input' style={{ marginRight: '1.5%', backgroundColor: this.props.theme.TEXTBOX_COLOR, color: this.props.theme.FONT_COLOR }} id='first-name' type='text' placeholder={this.props.languageSet.FIRST_NAME} />
                  <em className='err-lbl'>{this.props.firstNameErrorMsg}</em>
                </div>
                <div className='Container column' style={{ width: '50%' }}>
                  <input ref='lastName' className='input' style={{ marginLeft: '1.5%', backgroundColor: this.props.theme.TEXTBOX_COLOR, color: this.props.theme.FONT_COLOR }} id='last-name' type='text' placeholder={this.props.languageSet.LAST_NAME} />
                  <em className='err-lbl'>{this.props.lastNameErrorMsg}</em>
                </div>
              </div>
              <input ref='email' className='input' style={{ backgroundColor: this.props.theme.TEXTBOX_COLOR, color: this.props.theme.FONT_COLOR }} id='mail' type='text' placeholder={this.props.languageSet.MAIL} />
              <em className='err-lbl'>{this.props.emailErrorMsg}</em>
              <textarea ref='message' className='input' style={{ backgroundColor: this.props.theme.TEXTBOX_COLOR, color: this.props.theme.FONT_COLOR, height: '120px' }} id='message' rows='5' placeholder={this.props.languageSet.MESSAGE} />
              <em className='err-lbl'>{this.props.messageErrorMsg}</em>
              <div className='Container row jc-right' style={{ marginTop: '5%', textAlign: 'left' }}>
                {this._renderSendMessage()}
                <SendButton text={this.props.isSendingMail ? this.props.languageSet.SENDING : this.props.languageSet.SEND} onClick={this._onClick} backgroundColor={this.props.theme.COLOR_4}>
                  {
                    this.props.isSendingMail ?
                      <i className='fa fa-spinner fa-pulse fa-1x fa-fw' style={{ marginRight: '3px' }} /> :
                      null
                  }
                </SendButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


let mapStateToProps = state => {
  return {
    firstNameErrorMsg: state.ContactReducer.firstNameErrorMsg,
    lastNameErrorMsg: state.ContactReducer.lastNameErrorMsg,
    emailErrorMsg: state.ContactReducer.emailErrorMsg,
    messageErrorMsg: state.ContactReducer.messageErrorMsg,
    isSendingMail: state.ContactReducer.isSendingMail,
    errorSendingMail: state.ContactReducer.errorSendingMail,
    mailSent: state.ContactReducer.mailSent
  }
}

export default connect(mapStateToProps)(ContactMobile)