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
      languageSet: this.props.languageSet,
      theme: this.props.theme
    }
  }

  componentDidMount() {
    AppStore.addChangeListener(this._onAppSessionChange);
  }

  _onAppSessionChange() {
    this.setState({
      languageSet: AppStore.getLanguageSet(),
      theme: AppStore.getThemeSelected()
    });

    var menu = AppStore.getMenuSelected();
    if (menu === 'WHO_I_AM') {
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
      <div id="whoiam" className="Container column" style={{ backgroundColor: this.state.theme.BACKGROUND_COLOR }}>
        <Element name="WHO_I_AM" />
        <span style={{ textAlign: "left", fontSize: "40px", color: this.state.theme.COLOR_1 }}>
          <b>{this.state.languageSet.WHO_I_AM}</b>
        </span>
        <hr />
        <div>
          <p className="text" style={{ color: this.state.theme.FONT_COLOR }}>
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