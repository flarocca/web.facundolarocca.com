import React, { Component } from 'react';
import AppStore from '../stores/AppStore';
import ImageProvider from '../services/ImageProvider';
import { Element, scroller } from 'react-scroll';
import WEB from '../images/cloud.svg';
import MOBILE from '../images/mobile.svg';

export default class WhatIDo extends Component {
  constructor(props) {
    super(props);

    this._onAppSessionChange = this._onAppSessionChange.bind(this);
    this._imageProvider = new ImageProvider();
    this.state = {
      languageSet: this.props.languageSet
    }
  }

  componentDidMount() {
    AppStore.addChangeListener(this._onAppSessionChange);
  }

  _onAppSessionChange() {
    this.setState({ languageSet: AppStore.getLanguageSet() });
    var menu = AppStore.getMenuSelected();
    if (menu === 'WHAT_I_DO') {
      scroller.scrollTo(menu, {
        duration: 1000,
        delay: 0,
        smooth: true,
        offset: -50
      });
    }
  }

  render() {
    return (
      <div style={styles.container}>
        <Element name="WHAT_I_DO" />
        <div className="Whatido-Detail-Title">
          <p className="Section-title">{this.state.languageSet.WHAT_I_DO}</p>
          <hr />
        </div>
        <div style={styles.detailList}>
          <div style={styles.detailListItem}>
            <img src={WEB} style={styles.image} alt="logo" />
            <h2 style={styles.title}>{this.state.languageSet.WEB_APPS}</h2>
            {this.state.languageSet.WEB_APPS_DESC}
          </div>
          <div style={styles.detailListItem}>
            <img src={MOBILE} style={styles.image} alt="logo" />
            <h2 style={styles.title}>{this.state.languageSet.MOBILE_APPS}</h2>
            {this.state.languageSet.MOBILE_APPS_DESC}
          </div>
        </div>
      </div>
    );
  }
}

var styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgba(67,207,176,1)",
    justifyContent: "center"
  },
  detailList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "5%",
    marginBottom: "5%"
  },
  detailListItem: {
    marginLeft: "5%",
    marginRight: "5%",
    width: "30%"
  },
  title: {
    color: "white"
  },
  image: {
    height: "40%",
    width: "40%"
  }
}