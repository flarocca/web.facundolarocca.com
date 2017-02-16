import React, { Component } from 'react';
import AppStore from '../stores/AppStore';
import { Element, scroller } from 'react-scroll';
import Cloud from '../images/svg/Cloud';
import Mobile from '../images/svg/Mobile';
import isElementInViewport from '../helpers/isElementInViewport';

export default class WhatIDo extends Component {
  constructor(props) {
    super(props);

    this._onStoreChange = this._onStoreChange.bind(this);
    this._onScroll = this._onScroll.bind(this);

    this.state = {
      checked: false
    }
  }

  componentDidMount() {
    AppStore.addChangeListener(this._onStoreChange);
    window.addEventListener('scroll', this._onScroll);
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onStoreChange);
    window.removeEventListener('scroll', this._onScroll, false);
  }

  _onScroll(event) {
    let isInViewport = isElementInViewport(this.refs.title);
    if (isInViewport && !this.state.checked) {
      this.setState({ checked: true });
    }
  }

  _onStoreChange() {
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
      <div id="whatido" className="Container column jc-center" style={{ backgroundColor: this.props.theme.BACKGROUND_COLOR }}>
        <Element name="WHAT_I_DO" />
        <span style={{ textAlign: "left", fontSize: "40px", color: this.props.theme.COLOR_2 }}>
          <input type="checkbox" id="WhatIDo-chk" style={{ display: "none" }} checked={this.state.checked} />
          <b id="WhatIDo-title" ref="title">{this.props.languageSet.WHAT_I_DO}</b>
        </span>
        <hr />
        <div className="Container row jc-center" style={{ marginTop: "30px" }}>
          <div className="Container column jc-start column-item-x2" id="web" style={{ color: this.props.theme.COLOR_2 }}>
            <Cloud className="image-desc" innerColor={this.props.theme.BACKGROUND_COLOR} outerColor={this.props.theme.COLOR_2} />
            <h2 style={{ color: this.props.theme.COLOR_2 }}>{this.props.languageSet.WEB_APPS}</h2>
            <p className="text" style={{ color: this.props.theme.FONT_COLOR }}>
              {this.props.languageSet.WEB_APPS_DESC}
            </p>
          </div>
          <div className="Container column jc-start column-item-x2" id="mobile" style={{ color: this.props.theme.COLOR_2 }}>
            <Mobile className="image-desc" innerColor={this.props.theme.BACKGROUND_COLOR} outerColor={this.props.theme.COLOR_2} />
            <h2 style={{ color: this.props.theme.COLOR_2 }}>{this.props.languageSet.MOBILE_APPS}</h2>
            <p className="text" style={{ color: this.props.theme.FONT_COLOR }}>
              {this.props.languageSet.MOBILE_APPS_DESC}
            </p>
          </div>
        </div>
      </div>
    );
  }
}