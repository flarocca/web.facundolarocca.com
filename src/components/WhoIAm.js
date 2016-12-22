import React, { Component } from 'react';
import '../css/WhoIAm-section.css';
import AppStore from '../stores/AppStore';
import ImageProvider from '../services/ImageProvider';
import { Element, scroller } from 'react-scroll';

export default class WhoIAm extends Component {
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
    if (menu === 'WHO_I_AM') {
      scroller.scrollTo(menu, {
        duration: 1000,
        delay: 0,
        smooth: true
      });
    }
  }

  render() {
    return (
      <div className="Whoiam">
        <Element name="WHO_I_AM" />
        <span className="Title">
          <h2 style={{ color: '#ffffff', marginTop: '50px', marginBottom: '50px' }}>{this.state.languageSet.WHO_I_AM}</h2>
        </span>
        <span className="Detail">
          <img src={this._imageProvider.getImage('AVA')} className="App-avatar" alt="logo" />
          <span style={{ display: "inline-flex", position: "relative", border: "black solid 2px", height: "300px", width: "60%", top: "20%" }}>

          </span>
        </span>
      </div>
    );
  }
}