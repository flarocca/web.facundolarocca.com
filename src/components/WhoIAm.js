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
        smooth: true,
        offset: -40
      });
    }
  }

  render() {
    return (
      <div className="Whoiam">
        <Element name="WHO_I_AM" />
        <div className="Whoiam-Detail-Text">
          <p className="Section-title">{this.state.languageSet.WHO_I_AM}</p>
          <hr />
          {this.state.languageSet.MY_DESCRIPTION}
        </div>
      </div>
    );
  }
}