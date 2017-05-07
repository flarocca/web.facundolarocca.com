import React, { Component } from 'react'
import ExperienceContainer from './common/ExperienceContainer'
import SkillsContainer from './common/SkillsContainer'
import OtherSkillsContainer from './common/OtherSkillsContainer'
import SectionTitle from './common/SectionTitle'

export default class Resume extends Component {
  render () {
    return (
      <div id='resume' className='Container column' style={{ marginTop: '50px', backgroundColor: this.props.theme.BACKGROUND_COLOR }}>
        <SectionTitle title={this.props.languageSet.RESUME} color={this.props.theme.COLOR_3} id={'Resume'} />
        <div className='Container row jc-center' style={{ marginTop: '30px' }}>
          <div className='Container column jc-start column-item-x2' id='professional' style={{ color: this.props.theme.COLOR_3 }}>
            <div className='Container row' style={{ borderLeft: 'solid 2px #B4B2B2', paddingLeft: '30px' }}>
              <div style={{ textAlign: 'left', width: '100%' }}>
                <h2 style={{ color: this.props.theme.COLOR_3 }}>{this.props.languageSet.PROFESSIONAL}</h2>
                <ExperienceContainer color={this.props.theme.COLOR_3} fontColor={this.props.theme.FONT_COLOR} languageSet={this.props.languageSet} />
              </div>
            </div>
          </div>
          <div className='Container column jc-start column-item-x2' id='personal' style={{ color: this.props.theme.COLOR_3 }}>
            <div className='Container row' style={{ borderLeft: 'solid 2px #B4B2B2', paddingLeft: '30px' }}>
              <div style={{ textAlign: 'left' }}>
                <h2 style={{ color: this.props.theme.COLOR_3 }}>{this.props.languageSet.SKILLS}</h2>
                <SkillsContainer color={this.props.theme.COLOR_3} />
              </div>
            </div>
            <div className='Container row' style={{ borderLeft: 'solid 2px #B4B2B2', paddingLeft: '30px' }}>
              <div style={{ textAlign: 'left', width: '100%' }}>
                <h3 style={{ color: this.props.theme.COLOR_3 }}>{this.props.languageSet.OTHER_SKILLS}</h3>
                <OtherSkillsContainer color={this.props.theme.COLOR_3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
