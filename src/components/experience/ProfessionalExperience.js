import React, { Component } from 'react';
// import '../css/App-body.css';
// import AppStore from '../stores/AppStore';
// import { Element, scroller } from 'react-scroll';
// import Experience from './Experience';
// import Contact from './Contact';
// import WhoIAm from './WhoIAm';
// import WhatIDo from './WhatIDo';
// import VS from '../images/vs_1.png';
// import SQL from '../images/sql_1.png';
// import REACT from '../images/react.png';
// import ELASTIC from '../images/elastic.png';
// import NODE from '../images/nodejs.png';

export default class PersonalExperience extends Component {
  constructor(props) {
    super(props);


    // this._onAppSessionChange = this._onAppSessionChange.bind(this);
    // this.state = {
    //   languageSet: this.props.languageSet
    // }
  }

  // _onAppSessionChange() {
  //   this.setState({ languageSet: AppStore.getLanguageSet() });
  //   var menu = AppStore.getMenuSelected();
  //   if (menu === 'HOME') {
  //     scroller.scrollTo(menu, {
  //       duration: 1000,
  //       delay: 0,
  //       smooth: true,
  //       offset: -40
  //     });
  //   }
  // }

  render() {
    return (
      <div style={{widht: "100%", height: "100%", display: "block", backgroundColor: "rgba(252,110,81,1)"}}>
        test
      </div>
    );
  }
}