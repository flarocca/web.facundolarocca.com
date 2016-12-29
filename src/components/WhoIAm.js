import React, { Component } from 'react';
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
      <div className="Container column" style={{ backgroundColor: "rgba(245, 245, 245, 1)" }}>
        <Element name="WHO_I_AM" />
        <div>
          <h1 style={{ color: "rgba(76, 165, 208, 1)" }}>{this.state.languageSet.WHO_I_AM}</h1>
          <hr />
          <p className="text" style={{ color: "dimgray" }}>
            This is a line of text. This is a line of text.<br />
            This is a line of text. This is a line of text.<br />
            This is a line of text. This is a line of text.<br />
            This is a line of text. This is a line of text.<br />
            This is a line of text. This is a line of text.<br />
            <br />FACUNDO LA ROCCA
        </p>
        </div>
      </div>
    );
  }
}