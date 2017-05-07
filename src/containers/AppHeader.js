import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as AppActions from '../actions/AppActions'
import '../css/App.css'

class AppHeader extends Component {
  constructor(props) {
    super(props)

    this._onClick = this._onClick.bind(this)
    this._fixHeader = this._fixHeader.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this._fixHeader)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._fixHeader, false)
  }

  _fixHeader(event) {
    let top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop
    this.props.dispatch(AppActions.pageScrolled(top))
  }

  render() {
    return (
      <div id='header'>
        <div className='pre-hdr row' style={{ backgroundColor: this.props.theme.BACKGROUND_COLOR }}>
          <div className='profile-pic' />
          <div className='tagline column jc-left' style={{ textAlign: 'left' }}>
            <h1 id='my' >Facundo La Rocca</h1>
            <span style={{ fontSize: '25px', fontFamily: "'Open Sans', Helvetica, sans-serif" }}>
              <i className='fa fa-quote-left fa-1x fa-pull-left' aria-hidden='false' />
              <em>{this.props.languageSet.PHRASE}</em><br />
              <i className='fa fa-quote-right fa-1x fa-pull-right' aria-hidden='false' />
            </span>
          </div>
        </div>
        <div className='Container row jc-left' style={{ marginBottom: '5%', backgroundColor: this.props.theme.BACKGROUND_COLOR }}>
          <span className='Container column jc-center' style={{ alignText: 'center', color: 'white', backgroundColor: this.props.theme.COLOR_1, width: '110px', height: '35px' }}>
            <span style={{ color: 'white' }}>{this.props.languageSet.DEVELOPER}</span>
          </span>
        </div>
        <div id='Header' className='Container row hdr'>
          <div className={this.props.headerClass}>
            <span className={this.props.itemClass} style={{ backgroundColor: this.props.theme.COLOR_1, cursor: 'pointer' }}>
              <a onClick={() => this._onClick('WHO_I_AM')} className={this.props.linkClass} style={{ color: this.props.theme.BACKGROUND_COLOR }}>
                <div className={this.props.iconClass}><i className='fa fa-user fa-4x' /></div>
                <div className={this.props.btnClass} id='text-user'><b>{this.props.languageSet.WHO_I_AM}</b></div>
              </a>
            </span>
            <span className={this.props.itemClass} style={{ backgroundColor: this.props.theme.COLOR_2, cursor: 'pointer' }}>
              <a onClick={() => this._onClick('WHAT_I_DO')} className={this.props.linkClass} style={{ color: this.props.theme.BACKGROUND_COLOR }}>
                <div className={this.props.iconClass} id='icon-folder'><i className='fa fa-folder-open fa-4x' /></div>
                <div className={this.props.btnClass} id='text-folder'><b>{this.props.languageSet.WHAT_I_DO}</b></div>
              </a>
            </span>
            <span className={this.props.itemClass} style={{ backgroundColor: this.props.theme.COLOR_3, cursor: 'pointer' }}>
              <a onClick={() => this._onClick('RESUME')} className={this.props.linkClass} style={{ color: this.props.theme.BACKGROUND_COLOR }}>
                <div className={this.props.iconClass}><i className='fa fa-file-text fa-4x' /></div>
                <div className={this.props.btnClass}><b>{this.props.languageSet.RESUME}</b></div>
              </a>
            </span>
            <span className={this.props.itemClass} style={{ backgroundColor: this.props.theme.COLOR_4, cursor: 'pointer' }}>
              <a onClick={() => this._onClick('CONTACT')} className={this.props.linkClass} style={{ color: this.props.theme.BACKGROUND_COLOR }}>
                <div className={this.props.iconClass}><i className='fa fa-envelope fa-4x' /></div>
                <div className={this.props.btnClass}><b>{this.props.languageSet.CONTACT}</b></div>
              </a>
            </span>
          </div>
        </div>
      </div>
    )
  }

  _onClick(id) {
    this.props.dispatch(AppActions.menuSelected(id))
  }
}

let mapStateToProps = state => {
  return {
    headerClass: state.AppReducer.headerClass,
    itemClass: state.AppReducer.itemClass,
    linkClass: state.AppReducer.linkClass,
    iconClass: state.AppReducer.iconClass,
    btnClass: state.AppReducer.btnClass
  }
}

export default connect(mapStateToProps)(AppHeader)
