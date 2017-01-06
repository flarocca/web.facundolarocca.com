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
      theme: this.props.theme,
      checked: false
    }
  }

  componentDidMount() {
    AppStore.addChangeListener(this._onAppSessionChange);

    window.addEventListener('scroll', () => {
      if (event.srcElement.body.scrollTop >= 220) {
        this.setState({ checked: true });
      }
    });
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
        <span style={{ fontSize: "40px", color: this.state.theme.COLOR_1 }}>
          <input type="checkbox" id="WhoIAm-chk" style={{ display: "none" }} checked={this.state.checked} />
          <b id="WhoIAm-title">{this.state.languageSet.WHO_I_AM}</b>
        </span>
        <hr />
        <div className="Container column jc-center">
          <p className="text" style={{ textAlign: "justify", color: this.state.theme.FONT_COLOR }}>
            I am a Software Developer who loves programming and building valuable, reliable and high quality software.<br />
            I started programming when I was sixteen using some games and an old C++ book. Little by little I got
            into this fantastic world and I learnt to build software.<br />
            When I was twenty five I got in touch with Agiles Methodologies using XP and Scrum.
            Since then I can't think about managing a project without using Agiles Methodologies.
            A couple of years later I discovered Test Driven Development, methodology that I have used until right now.<br />
            Although I have worked almost all my professional life with C# and .Net technologies, I have found in JavaScript
            and all its powerful and simplicity an incredible world which has not been totally discovered yet, and I want to.
            <br />
          </p>
          <span className="column" style={{ textAlign: "right" }}><em style={{ fontSize: "26px" }}>Facundo La Rocca.</em></span>
        </div>
      </div>
    );
  }
}