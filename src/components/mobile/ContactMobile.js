import React, { Component } from 'react'
import AppStore from '../../stores/AppStore'
import AppActions from '../../actions/AppActions'
import SectionTitleMobile from '../common/SectionTitleMobile'

export default class ContactMobile extends Component {
  constructor (props) {
    super(props)

    this._onStoreChange = this._onStoreChange.bind(this)
    this._onClick = this._onClick.bind(this)
    this._firstNameChange = this._firstNameChange.bind(this)
    this._lastNameChange = this._lastNameChange.bind(this)
    this._emailChange = this._emailChange.bind(this)
    this._messageChange = this._messageChange.bind(this)
    this._renderRequiredFieldMsg = this._renderRequiredFieldMsg.bind(this)
    this._renderSendButton = this._renderSendButton.bind(this)
    this._renderSendMessage = this._renderSendMessage.bind(this)

    this.state = {
      firstNameErrorMsg: '',
      lastNameErrorMsg: '',
      emailNameErrorMsg: '',
      messageNameErrorMsg: '',
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      isSendingMail: false,
      errorSendingMail: '',
      mailSent: false
    }
  }

  componentDidMount () {
    AppStore.addChangeListener(this._onStoreChange)
  }

  componentWillUnmount () {
    AppStore.removeChangeListener(this._onStoreChange)
  }

  _onClick () {
    this.setState({ firstNameErrorMsg: !this.state.firstName ? this.props.languageSet.FIELD_REQUIRED_MSG : '' })
    this.setState({ lastNameErrorMsg: !this.state.lastName ? this.props.languageSet.FIELD_REQUIRED_MSG : '' })
    this.setState({ emailNameErrorMsg: !this.state.email ? this.props.languageSet.FIELD_REQUIRED_MSG : '' })
    this.setState({ messageNameErrorMsg: !this.state.message ? this.props.languageSet.FIELD_REQUIRED_MSG : '' })

    if (this.state.firstName && this.state.lastName && this.state.email && this.state.message) {
      AppActions.sendMail(this.state.firstName, this.state.lastName, this.state.message, this.state.email)
    }
  }

  _firstNameChange (e) {
    this.setState({ firstName: e.target.value })
  }

  _lastNameChange (e) {
    this.setState({ lastName: e.target.value })
  }

  _emailChange (e) {
    this.setState({ email: e.target.value })
  }

  _messageChange (e) {
    this.setState({ message: e.target.value })
  }

  _onStoreChange () {
    this.setState({
      isSendingMail: AppStore.isSendingMail(),
      errorSendingMail: AppStore.getErrorSendingMail(),
      mailSent: AppStore.mailSent()
    }, () => {
      if (!this.state.isSendingMail && !this.state.errorSendingMail) {
        this.setState({
          firstNameErrorMsg: '',
          lastNameErrorMsg: '',
          emailNameErrorMsg: '',
          messageNameErrorMsg: '',
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        })
      }
    })
  }

  _renderRequiredFieldMsg (field, message) {
    return (
      <em className='err-lbl'>{field ? '' : message}</em>
    )
  }

  _renderSendButton () {
    if (this.state.isSendingMail) {
      return (
        <button onClick={this._onClick} type='button' className='jc-center button-mobile' style={{ alignSelf: 'flex-end', color: 'white', width: '40%', backgroundColor: this.props.theme.COLOR_4 }}>
          <i className='fa fa-spinner fa-pulse fa-1x fa-fw' style={{ marginRight: '3px' }} />
          <span>{this.props.languageSet.SENDING}</span>
        </button>
      )
    }

    return (
      <button onClick={this._onClick} type='button' className='button-mobile' style={{ alignSelf: 'flex-end', width: '40%', backgroundColor: this.props.theme.COLOR_4 }}><b style={{ width: '100%', color: 'white' }}>{this.props.languageSet.SEND}</b></button>
    )
  }

  _renderSendMessage () {
    if (this.state.mailSent) {
      return (
        <div className='column' style={{ flex: '1' }}><em>{this.props.languageSet.MESSAGE_SENT}</em></div>
      )
    }

    if (!this.state.mailSent && this.state.errorSendingMail) {
      return (
        <div className='column' style={{ flex: '1' }}><em>{this.state.errorSendingMail}</em></div>
      )
    }

    return null
  }

  render () {
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
                  <input className='input' style={{ marginRight: '1.5%', backgroundColor: this.props.theme.TEXTBOX_COLOR, color: this.props.theme.FONT_COLOR }} value={this.state.firstName} onChange={this._firstNameChange} id='first-name' type='text' placeholder={this.props.languageSet.FIRST_NAME} />
                  {this._renderRequiredFieldMsg(this.state.firstName, this.state.firstNameErrorMsg)}
                </div>
                <div className='Container column' style={{ width: '50%' }}>
                  <input className='input' style={{ marginLeft: '1.5%', backgroundColor: this.props.theme.TEXTBOX_COLOR, color: this.props.theme.FONT_COLOR }} value={this.state.lastName} onChange={this._lastNameChange} id='last-name' type='text' placeholder={this.props.languageSet.LAST_NAME} />
                  {this._renderRequiredFieldMsg(this.state.lastName, this.state.lastNameErrorMsg)}
                </div>
              </div>
              <input className='input' style={{ backgroundColor: this.props.theme.TEXTBOX_COLOR, color: this.props.theme.FONT_COLOR }} value={this.state.email} onChange={this._emailChange} id='mail' type='text' placeholder={this.props.languageSet.MAIL} />
              {this._renderRequiredFieldMsg(this.state.email, this.state.emailNameErrorMsg)}
              <textarea className='input' style={{ backgroundColor: this.props.theme.TEXTBOX_COLOR, color: this.props.theme.FONT_COLOR, height: '120px' }} value={this.state.message} onChange={this._messageChange} id='message' rows='5' placeholder={this.props.languageSet.MESSAGE} />
              {this._renderRequiredFieldMsg(this.state.message, this.state.messageNameErrorMsg)}
              <div className='Container row jc-right' style={{ marginTop: '5%', textAlign: 'left' }}>
                {this._renderSendMessage()}
                {this._renderSendButton()}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
