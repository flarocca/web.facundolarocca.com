import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/App.css'
import '../css/AppMobile.css'
import '../font-awesome/css/font-awesome.min.css'
import BackgroundImage from '../images/background.png'
import GitHub from '../images/svg/GitHub'
import LinkedIn from '../images/svg/LinkedIn'
import StackOverflow from '../images/svg/StackOverflow'
import ImageSources from '../constants/ImageSources'
import AppHeader from './AppHeader'
import AppFooter from '../components/AppFooter'
import AppBody from './AppBody'
import UpButton from '../components/UpButton'
import AppHeaderMobile from '../components/mobile/AppHeaderMobile'
import AppBodyMobile from '../components/mobile/AppBodyMobile'
import AppFooterMobile from '../components/mobile/AppFooterMobile'
import MediaQuery from 'react-responsive'
import { Element, scroller } from 'react-scroll'

class App extends Component {
  constructor(props) {
    super(props)

    this._scrollTo = this._scrollTo.bind(this)
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.props.menuSelected !== nextProps.menuSelected) {
      let offset = nextProps.menuSelected === 'WHO_I_AM' ? -50 : 0
      this._scrollTo(nextProps.menuSelected, offset)
    }
  }

  _scrollTo(menu, offset = 0) {
    scroller.scrollTo(menu, {
      duration: 1000,
      delay: 0,
      smooth: true,
      offset: offset
    })
  }

  render() {
    return (
      <div>
        <MediaQuery query='(min-device-width: 1224px)'>
          <MediaQuery query='(max-width: 480px)'>
            <div id='app-mobile' className='App-mobile column' style={{ backgroundColor: this.props.theme.BACKGROUND_COLOR }}>
              <AppHeaderMobile languageSet={this.props.languageSet} theme={this.props.theme} />
              <AppBodyMobile initialLanguage={this.props.initialLanguage} languageSet={this.props.languageSet} theme={this.props.theme} />
              <AppFooterMobile languageSet={this.props.languageSet} theme={this.props.theme} />
            </div>
          </MediaQuery>
          <MediaQuery query='(min-width: 480px)'>
            <div id='app' className='App column' style={{ color: 'dimgray', backgroundImage: `url(${BackgroundImage})`, backgroundRepeat: 'repeat' }}>
              <Element name='TOP' />
              <div id='main' className='Container column co-medium' style={{ alignSelf: 'center', backgroundColor: 'transparent' }}>
                <div className='Container row jc-right' style={{ paddingRight: '1%' }}>
                  <a target='_blank' className='Container column jc-center' href={ImageSources.STACKOVERFLOW_PROFILE}><StackOverflow className='icon-med' innerColor='dimgray' outerColor='transparent' /></a>
                  <a target='_blank' className='Container column jc-center' href={ImageSources.LINKEDIN_PROFILE}><LinkedIn className='icon-large' innerColor='dimgray' outerColor='transparent' /></a>
                  <a target='_blank' className='Container column jc-center' href={ImageSources.GITHUB_PROFILE}><GitHub className='icon' innerColor='dimgray' outerColor='transparent' /></a>
                </div>
                <div style={{ backgroundColor: this.props.theme.BACKGROUND_COLOR }}>
                  <AppHeader languageSet={this.props.languageSet} theme={this.props.theme} />
                  <AppBody initialLanguage={this.props.initialLanguage} languageSet={this.props.languageSet} theme={this.props.theme} />
                  <AppFooter languageSet={this.props.languageSet} theme={this.props.theme} />
                  <UpButton theme={this.props.theme} />
                </div>
              </div>
            </div>
          </MediaQuery>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1224px)'>
          <div id='app-mobile' className='App-mobile column' style={{ backgroundColor: this.props.theme.BACKGROUND_COLOR }}>
            <AppHeaderMobile languageSet={this.props.languageSet} theme={this.props.theme} />
            <AppBodyMobile initialLanguage={this.props.initialLanguage} languageSet={this.props.languageSet} theme={this.props.theme} />
            <AppFooterMobile languageSet={this.props.languageSet} theme={this.props.theme} />
          </div>
        </MediaQuery>
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    languageSet: state.AppReducer.languageSet,
    theme: state.AppReducer.themeSelected,
    initialLanguage: state.AppReducer.initialLanguage,
    menuSelected: state.AppReducer.menuSelected
  }
}

export default connect(mapStateToProps)(App)