import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as AppActions from '../actions/AppActions'

class LanguageSelector extends Component {
  constructor(props) {
    super(props)

    this._changeLanguage = this._changeLanguage.bind(this)
  }

  render() {
    return (
      <div className={this.props.className} style={this.props.style}>
        <input type='checkbox' id={this.props.checkboxId} />
        <label id={this.props.labelId} htmlFor={this.props.checkboxId} style={{ background: 'rgb(200, 200, 200)' }}>
          <b style={{ color: 'white', position: 'relative', top: this.props.labelTop }}>{this.props.languageSelected}</b>
        </label>
        <div className={this.props.float + ' column jc-center'} style={{ backgroundColor: 'rgb(200, 200, 200)' }}>
          <div className='Container column jc-center' style={{ color: 'dimgray', textAlign: 'center', height: '30px' }}>
            <b>Language Selector</b>
          </div>
          <div className={'Container ' + this.props.containerDirection} style={this.props.containerStyle}>
            <div id={this.props.langId} style={this.props.langStyle}>
              <div className='lanItem-btn'>
                <input onChange={() => this._changeLanguage('ARG')} type='radio' name='language' id='argLan' checked={this.props.languageSelected === 'ARG'} />
                <label id='argLan-label' htmlFor='argLan'>
                  <b style={{ position: 'relative', marginTop: '10%' }}>ARG</b>
                </label>
              </div>
            </div>
            <div id={this.props.langId} style={this.props.langStyle}>
              <div className='lanItem-btn'>
                <input onChange={() => this._changeLanguage('ENG')} type='radio' name='language' id='engLan' checked={this.props.languageSelected === 'ENG'} />
                <label id='engLan-label' htmlFor='engLan'>
                  <b style={{ position: 'relative', marginTop: '10%' }}>ENG</b>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  _changeLanguage(language) {
    this.props.dispatch(AppActions.languageChanged(language))
  }
}

let mapStateToProps = state => {
  return {
    languageSelected: state.AppReducer.languageSelected
  }
}

export default connect(mapStateToProps)(LanguageSelector)
