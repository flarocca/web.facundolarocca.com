import React, { Component } from 'react';
import ImageProvider from '../services/ImageProvider';
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

    this._imageProvider = new ImageProvider();
    this._goToHome = this._goToHome.bind(this);
  }

  componentDidMount() {

  }

  _goToHome() {
    scroller.scrollTo('TOP', {
      duration: 1000,
      delay: 0,
      smooth: true,
      offset: -40
    });
  }

  render() {
    return (
      <a href="#" onClick={this._goToHome} style={styles.link}>
        <img title="Go to home" src={this._imageProvider.getImage('UPW')} className="App-up-btn" alt="logo" />
      </a>
    );
  }
}