import React, { Component } from 'react'
import Cloud from '../../images/svg/Cloud'
import Mobile from '../../images/svg/Mobile'
import SectionTitleMobile from '../common/SectionTitleMobile'

export default class WhatIDoMobile extends Component {
  render () {
    return (
      <div id='whatido-mobile' className='Container column jc-center' style={{ backgroundColor: this.props.theme.BACKGROUND_COLOR }}>
        <SectionTitleMobile color={this.props.theme.COLOR_2} id={'WhatIDo'} title={this.props.languageSet.WHAT_I_DO} />
        <div className='Container column'>
          <div className='Container column' style={{ textAlign: 'left' }}>
            <h2 style={{ color: this.props.theme.COLOR_2 }}>{this.props.languageSet.WEB_APPS}</h2>
          </div>
          <div className='Container row' style={{ color: this.props.theme.COLOR_2 }}>
            <div style={{ display: 'inline-block', height: '100%', verticalAlign: 'middle', flex: '1', marginRight: '5px' }}>
              <Cloud style={{ verticalAlign: 'middle' }} className='image-desc-mobile' innerColor={this.props.theme.BACKGROUND_COLOR} outerColor={this.props.theme.COLOR_2} />
            </div>
            <div style={{ display: 'block', flex: '4', textAlign: 'left' }}>
              <p className='text' style={{ color: this.props.theme.FONT_COLOR }}>
                {this.props.languageSet.WEB_APPS_DESC}
              </p>
            </div>
          </div>
        </div>
        <div className='Container column'>
          <div className='Container column' style={{ textAlign: 'left' }}>
            <h2 style={{ color: this.props.theme.COLOR_2 }}>{this.props.languageSet.MOBILE_APPS}</h2>
          </div>
          <div className='Container row' style={{ color: this.props.theme.COLOR_2 }}>
            <div style={{ display: 'inline-block', flex: '1', marginRight: '5px' }}>
              <Mobile className='image-desc-mobile' innerColor={this.props.theme.BACKGROUND_COLOR} outerColor={this.props.theme.COLOR_2} />
            </div>
            <div style={{ display: 'block', flex: '4', textAlign: 'left' }}>
              <p className='text' style={{ color: this.props.theme.FONT_COLOR }}>
                {this.props.languageSet.MOBILE_APPS_DESC}
              </p>
            </div>
          </div>
        </div>
      </div >
    )
  }
}
