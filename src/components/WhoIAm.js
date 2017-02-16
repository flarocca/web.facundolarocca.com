import React, { Component } from 'react';
import AppStore from '../stores/AppStore';
import { Element, scroller } from 'react-scroll';
import isElementInViewport from '../helpers/isElementInViewport';

export default class WhoIAm extends Component {
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

  render() {
    return (
      <div id="whoiam" className="Container column" style={{ backgroundColor: this.props.theme.BACKGROUND_COLOR }}>
        <Element name="WHO_I_AM" />
        <span style={{ textAlign: "left", fontSize: "40px", color: this.props.theme.COLOR_1 }}>
          <input type="checkbox" id="WhoIAm-chk" style={{ display: "none" }} checked={this.state.checked} />
          <b id="WhoIAm-title" ref="title">{this.props.languageSet.WHO_I_AM}</b>
        </span>
        <hr />
        <div className="Container column jc-center">
          <p className="text" style={{ textAlign: "justify", color: this.props.theme.FONT_COLOR }}>
            {this.props.languageSet.MY_DESCRIPTION}
          </p>
          <span className="column" style={{ textAlign: "right" }}><em style={{ fontSize: "26px" }}>Facundo La Rocca.</em></span>
        </div>
      </div>
    );
  }

  _onScroll(event) {
    let isInViewport = isElementInViewport(this.refs.title);
    if(isInViewport && !this.state.checked){
      this.setState({ checked: true });
    }
  }

  _onStoreChange() {
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
}