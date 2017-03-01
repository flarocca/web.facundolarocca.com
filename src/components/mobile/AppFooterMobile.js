import React, { Component } from 'react'
import GitHub from '../../images/svg/GitHub'
import LinkedIn from '../../images/svg/LinkedIn'
import StackOverflow from '../../images/svg/StackOverflow'
import ImageSources from '../../constants/ImageSources'
import REACT from '../../images/react-logo.svg'

export default class AppFooterMobile extends Component {
  render () {
    return (
      <div className='Container column' style={{ color: 'white', marginTop: '60px', backgroundColor: this.props.theme.COLOR_4 }}>
        <div id='footer-mobile' className='Container row'>
          <a target='_blank' href={ImageSources.STACKOVERFLOW_PROFILE}><StackOverflow className='icon-mobile' innerColor='white' outerColor='transparent' /></a>
          <a target='_blank' href={ImageSources.LINKEDIN_PROFILE}><LinkedIn className='icon-mobile' innerColor='white' outerColor='transparent' /></a>
          <a target='_blank' href={ImageSources.GITHUB_PROFILE}><GitHub className='icon-mobile' innerColor='white' outerColor={this.props.theme.COLOR_4} /></a>
        </div>
        <p>
          Copyright &copy; 2017 Facundo La Rocca. All right reserved. <br />
          Made with <i><a href={ImageSources.REACT} style={{ color: 'white' }}>ReactJS.</a></i>
          <a href={ImageSources.REACT}><img src={REACT} className='logo' alt='ReactJS' style={{ verticalAlign: 'middle', height: '20px' }} /></a>
        </p>
      </div>
    )
  }
}
