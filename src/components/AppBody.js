import React, { Component } from 'react';
import AppStore from '../stores/AppStore';
import { Element, scroller } from 'react-scroll';
import Experience from './Experience';
import Contact from './Contact';
import WhoIAm from './WhoIAm';
import WhatIDo from './WhatIDo';
import VS from '../images/vs_1.png';
import SQL from '../images/sql_1.png';
import REACT from '../images/react.png';
import ELASTIC from '../images/elastic.png';
import NODE from '../images/nodejs.png';

export default class AppBody extends Component {
  constructor(props) {
    super(props);


    this._onAppSessionChange = this._onAppSessionChange.bind(this);
    this.state = {
      languageSet: this.props.languageSet
    }
  }

  _onAppSessionChange() {
    this.setState({ languageSet: AppStore.getLanguageSet() });
    var menu = AppStore.getMenuSelected();
    if (menu === 'HOME') {
      scroller.scrollTo(menu, {
        duration: 1000,
        delay: 0,
        smooth: true,
        offset: -40
      });
    }
  }

  render() {
    return (
      <div>
        <div style={styles.back}></div>
        <Element name="HOME" />
        <WhoIAm languageSet={this.state.languageSet} />
        <WhatIDo languageSet={this.state.languageSet} />
        <div style={styles.tools}>
          <span><img src={VS} style={styles.image} alt="logo" /></span>
          <span><img src={SQL} style={styles.image} alt="logo" /></span>
          <span><img src={REACT} style={styles.image} alt="logo" /></span>
          <span><img src={ELASTIC} style={styles.image} alt="logo" /></span>
          <span><img src={NODE} style={styles.image} alt="logo" /></span>
        </div>
        <Experience languageSet={this.state.languageSet} />
        <Contact languageSet={this.state.languageSet} />
      </div>
    );
  }
}

var styles = {
  back: {
    backgroundColor: "rgba(252,110,81,1)",
    height: "20px",
    padding: "20px",
    display: "block"
  },
  tools: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(34, 34, 34, 1)",
    width: "100%",
    height: "200px"
  },
  image: {
    backgroundColor: "transparent",
    height: "130px",
    marginLeft: "50px",
    marginRight: "50px"
  }
}