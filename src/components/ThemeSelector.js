import React, { Component } from 'react';
import Setting from '../images/svg/Setting';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';
import ThemeManager from '../services/ThemeManager';
import LIGHT_BLUE_THEME from '../constants/themes/LIGHT_BLUE_THEME';
import LIGHT_RED_THEME from '../constants/themes/LIGHT_RED_THEME';

export default class ThemeSelector extends Component {
  constructor(props) {
    super(props);

    this._renderMainThemes = this._renderMainThemes.bind(this);
    this._renderThemes = this._renderThemes.bind(this);
    this._onThemeSelected = this._onThemeSelected.bind(this);
    this._onAppSessionChange = this._onAppSessionChange.bind(this);

    this.state = {
      theme: this.props.theme,
      languageSet: this.props.languageSet,
      themes: this.props.themes ? this.props.themes : []
    }
  }

  componentDidMount() {

  }

  _onAppSessionChange() {
    this.setState({
      languageSet: AppStore.getLanguageSet(),
      theme: AppStore.getThemeSelected()
    });
  }

  _onThemeSelected(themeName) {
    AppActions.themeSelected(themeName);
  }

  _renderMainThemes() {
    return (
      <div className="Container row" style={{ height: "80px", marginRight: "10%", marginLeft: "5%" }}>
        <div onClick={() => this._onThemeSelected(this.state.themes[0].NAME)} style={{ height: "50px", width: "50%", marginTop: "8%", marginBottom: "8%", marginLeft: "8%", marginRight: "4%", display: "relative" }}>
          <div style={{ position: "relative", top: "0", left: "0", height: "80%", width: "80%", backgroundColor: this.state.themes[0].BACKGROUND_COLOR, display: "block" }} />
          <div style={{ position: "relative", top: "-60%", right: "-20%", height: "80%", width: "80%", backgroundColor: this.state.themes[0].MAIN_COLOR, display: "block" }} />
        </div>
        <div onClick={() => this._onThemeSelected(this.state.themes[1].NAME)} style={{ height: "50px", width: "50%", marginTop: "8%", marginBottom: "8%", marginLeft: "4%", marginRight: "8%", display: "absolute" }}>
          <div style={{ position: "relative", top: "0", left: "0", height: "80%", width: "80%", backgroundColor: this.state.themes[1].BACKGROUND_COLOR, display: "block" }} />
          <div style={{ position: "relative", top: "-60%", right: "-20%", height: "80%", width: "80%", backgroundColor: this.state.themes[1].MAIN_COLOR, display: "block" }} />
        </div>
      </div>
    );
  }

  _renderThemes() {
    var renderedThemes = [];

    for (var i = 2; i < this.state.themes.length; i++) {
      var item = this.state.themes[i];
      renderedThemes.push(
        <div onClick={() => this._onThemeSelected(item.NAME)} style={{ height: "30px", width: "30px", marginTop: "8%", marginBottom: "8%", marginLeft: "8%", marginRight: "4%", display: "block" }}>
          <div style={{ position: "relative", top: "0", left: "0", height: "80%", width: "80%", backgroundColor: item.BACKGROUND_COLOR, display: "block" }} />
          <div style={{ position: "relative", top: "-60%", right: "-20%", height: "80%", width: "80%", backgroundColor: item.MAIN_COLOR, display: "block" }} />
        </div>
      );
    }

    return (renderedThemes);
  }

  render() {
    return (
      <div className="Container row fixed main" style={{ right: "0px", top: "35%" }}>
        <input type="checkbox" id="navigation" />
        <label htmlFor="navigation" style={{ background: "rgb(200, 200, 200)" }}>
          <Setting className="setting" innerColor={this.state.theme.BACKGROUND_COLOR} outerColor="rgb(200, 200, 200)" />
        </label>
        <div className="right column jc-center" style={{ backgroundColor: "rgb(200, 200, 200)" }}>
          <div className="Container column jc-center" style={{ color: this.state.theme.FONT_COLOR, textAlign: "center", height: "30px" }}>
            Theme Selector
          </div>
          {this._renderMainThemes()}
          <div className="Container row" style={{ flexWrap: "wrap", height: "60%" }}>
            {this._renderThemes()}
          </div>
        </div>
      </div>
    );
  }
}