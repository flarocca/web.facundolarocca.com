import React, { Component } from 'react';
import { Element } from 'react-scroll';

export default class WhoIAmMobile extends Component {
  constructor(props) {
    super(props);
    
    this._onScroll = this._onScroll.bind(this);
    this.state = {
      checked: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this._onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._onScroll, false);
  }

  _onScroll(event) {
    if (event.srcElement.body.scrollTop >= 220) {
      this.setState({ checked: true });
    }
  }

  render() {
    return (
      <div id="whoiam-mobile" className="Container column" style={{ backgroundColor: this.props.theme.BACKGROUND_COLOR }}>
        <Element name="WHO_I_AM" />
        <span style={{ textAlign: "left", fontSize: "20px", color: this.props.theme.COLOR_1 }}>
          <b id="WhoIAm-title-mobile">{this.props.languageSet.WHO_I_AM}</b>
        </span>
        <hr />
        <div className="Container column jc-center">
          <p className="text" style={{ textAlign: "justify", color: this.props.theme.FONT_COLOR }}>
            {this.props.languageSet.MY_DESCRIPTION}
          </p>
          <span className="column" style={{ textAlign: "right" }}><em style={{ fontSize: "15px" }}>Facundo La Rocca.</em></span>
        </div>
      </div>
    );
  }
}