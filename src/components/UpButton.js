import React, { Component } from 'react';
import Up from '../images/svg/Up';
import { scroller } from 'react-scroll';

var styles = {
  link: {
    backgroundColor: "transparent",
    position: "fixed",
    bottom: "30px",
    right: "30px",
    borderRadius: "5px",
    border: "2px solid transparent"
  }
}

export default class UpButton extends Component {
  constructor(props) {
    super(props);

    this._goToHome = this._goToHome.bind(this);
  }

  _goToHome() {
    scroller.scrollTo('TOP', {
      duration: 1000,
      delay: 0,
      smooth: true
    });
  }

  render() {
    return (
      <a href="#" onClick={this._goToHome} style={styles.link}>
        <Up className="up-btn" outerColor={this.props.theme.COLOR_4} />
      </a>
    );
  }
}