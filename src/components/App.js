import React, { Component } from 'react'
import '../css/App.css'
import '../css/AppMobile.css'
import '../font-awesome/css/font-awesome.min.css'
import BackgroundImage from '../images/background.png'
import GitHub from '../images/svg/GitHub'
import LinkedIn from '../images/svg/LinkedIn'
import StackOverflow from '../images/svg/StackOverflow'
import ImageSources from '../constants/ImageSources'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import AppBody from './AppBody'
import UpButton from './UpButton'
import AppHeaderMobile from './mobile/AppHeaderMobile'
import AppBodyMobile from './mobile/AppBodyMobile'
import AppFooterMobile from './mobile/AppFooterMobile'
import AppActions from '../actions/AppActions'
import AppStore from '../stores/AppStore'
import MediaQuery from 'react-responsive'
import { Element, scroller } from 'react-scroll'

export default class App extends Component {
  constructor (props) {
    super(props)

    this._onStoreChange = this._onStoreChange.bind(this)
    this._scrollTo = this._scrollTo.bind(this)
    this.state = {
      languageSet: AppStore.getLanguageSet(),
      theme: AppStore.getThemeSelected(),
      initialLanguage: 'ARG'
    }
  }

  componentDidMount () {
    AppStore.addChangeListener(this._onStoreChange)
    AppActions.initializeApp()
  }

  componentWillUnmount () {
    AppStore.removeChangeListener(this._onStoreChange)
  }

  _scrollTo (menu, offset = 0) {
    scroller.scrollTo(menu, {
      duration: 1000,
      delay: 0,
      smooth: true,
      offset: offset
    })
  }

  _onStoreChange () {
    this.setState({
      languageSet: AppStore.getLanguageSet(),
      theme: AppStore.getThemeSelected()
    })

    var menu = AppStore.getMenuSelected()
    switch (menu) {
      case 'WHO_I_AM':
        this._scrollTo(menu, -50)
        break
      case 'HOME':
      case 'WHAT_I_DO':
      case 'RESUME':
      case 'CONTACT':
        this._scrollTo(menu)
        break

      default:
        break
    }
  }

  render () {
    return (
      <div>
        <MediaQuery query='(min-device-width: 1224px)'>
          <MediaQuery query='(max-width: 480px)'>
            <div id='app-mobile' className='App-mobile column' style={{ backgroundColor: this.state.theme.BACKGROUND_COLOR }}>
              <AppHeaderMobile languageSet={this.state.languageSet} theme={this.state.theme} />
              <AppBodyMobile initialLanguage={this.state.initialLanguage} languageSet={this.state.languageSet} theme={this.state.theme} />
              <AppFooterMobile languageSet={this.state.languageSet} theme={this.state.theme} />
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
                <div style={{ backgroundColor: this.state.theme.BACKGROUND_COLOR }}>
                  <AppHeader languageSet={this.state.languageSet} theme={this.state.theme} />
                  <AppBody initialLanguage={this.state.initialLanguage} languageSet={this.state.languageSet} theme={this.state.theme} />
                  <AppFooter languageSet={this.state.languageSet} theme={this.state.theme} />
                  <UpButton theme={this.state.theme} />
                </div>
              </div>
            </div>
          </MediaQuery>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1224px)'>
          <div id='app-mobile' className='App-mobile column' style={{ backgroundColor: this.state.theme.BACKGROUND_COLOR }}>
            <AppHeaderMobile languageSet={this.state.languageSet} theme={this.state.theme} />
            <AppBodyMobile initialLanguage={this.state.initialLanguage} languageSet={this.state.languageSet} theme={this.state.theme} />
            <AppFooterMobile languageSet={this.state.languageSet} theme={this.state.theme} />
          </div>
        </MediaQuery>
      </div>
    )
  }
}
