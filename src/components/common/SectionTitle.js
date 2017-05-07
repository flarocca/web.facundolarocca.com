import React, { Component } from 'react'
import isElementInViewport from '../../helpers/isElementInViewport'

export default class SectionTitle extends Component {
  constructor (props) {
    super(props)

    this._onScroll = this._onScroll.bind(this)
    this.state = {
      checked: false
    }
  }

  componentDidMount () {
    window.addEventListener('scroll', this._onScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this._onScroll, false)
  }

  render () {
    return (
      <span style={{ textAlign: 'left', fontSize: '40px', color: this.props.color }}>
        <input type='checkbox' id={this.props.id + '-chk'} style={{ display: 'none' }} checked={this.state.checked} />
        <b id={this.props.id + '-title'} ref='title'>{this.props.title}</b>
        <hr />
      </span>
    )
  }

  _onScroll (event) {
    let isInViewport = isElementInViewport(this.refs.title)
    if (isInViewport && !this.state.checked) {
      this.setState({ checked: true })
    }
  }
}
