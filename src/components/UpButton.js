import React, { Component } from 'react'
import Up from '../images/svg/Up'
import { scroller } from 'react-scroll'

export default class UpButton extends Component {
  constructor (props) {
    super(props)

    this._goToHome = this._goToHome.bind(this)
  }

  _goToHome () {
    scroller.scrollTo('TOP', {
      duration: 1000,
      delay: 0,
      smooth: true
    })
  }

  render () {
    return (
      <span id='up-button' onClick={this._goToHome}>
        <Up className='up-btn' outerColor={this.props.theme.COLOR_4} />
      </span>
    )
  }
}
