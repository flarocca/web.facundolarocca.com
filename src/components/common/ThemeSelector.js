import React, { Component } from 'react'
import { connect } from 'react-redux'
import Setting from '../../images/svg/Setting'
import * as ThemeSelectorActions from '../../actions/ThemeSelectorActions'

import LIGHT_BLUE_THEME from '../../constants/themes/LIGHT_BLUE_THEME'
import COLORFUL_THEME from '../../constants/themes/COLORFUL_THEME'

class ThemeSelector extends Component {
  constructor(props) {
    super(props)

    this._renderMainThemes = this._renderMainThemes.bind(this)
    this._renderThemes = this._renderThemes.bind(this)
    this._onThemeSelected = this._onThemeSelected.bind(this)
  }

  componentDidMount(){
    this.props.dispatch(ThemeSelectorActions.init(this.props.position))
  }

  _onThemeSelected(themeName) {
    this.props.dispatch(ThemeSelectorActions.themeSelected(themeName))
  }

  _renderMainThemes() {
    return (
      <div className='Container row' style={{ height: '80px', marginRight: '10%', marginLeft: '5%' }}>
        <div onClick={() => this._onThemeSelected(COLORFUL_THEME.NAME)} style={{ height: '50px', width: '50%', marginTop: '8%', marginBottom: '8%', marginLeft: '4%', marginRight: '8%', display: 'absolute' }}>
          <div style={{ position: 'relative', top: '0', left: '0', height: '80%', width: '80%', backgroundColor: COLORFUL_THEME.BACKGROUND_COLOR, display: 'block' }} />
          <div style={{ position: 'relative', top: '-60%', right: '-20%', height: '80%', width: '80%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }} >
            <div style={{ display: 'inline-block', width: '50%', height: '50%', backgroundColor: COLORFUL_THEME.COLOR_1 }} />
            <div style={{ display: 'inline-block', width: '50%', height: '50%', backgroundColor: COLORFUL_THEME.COLOR_2 }} />
            <div style={{ display: 'inline-block', width: '50%', height: '50%', backgroundColor: COLORFUL_THEME.COLOR_3 }} />
            <div style={{ display: 'inline-block', width: '50%', height: '50%', backgroundColor: COLORFUL_THEME.COLOR_4 }} />
          </div>
        </div>
        <div onClick={() => this._onThemeSelected(LIGHT_BLUE_THEME.NAME)} style={{ height: '50px', width: '50%', marginTop: '8%', marginBottom: '8%', marginLeft: '8%', marginRight: '4%', display: 'relative' }}>
          <div style={{ position: 'relative', top: '0', left: '0', height: '80%', width: '80%', backgroundColor: LIGHT_BLUE_THEME.BACKGROUND_COLOR, display: 'block' }} />
          <div style={{ position: 'relative', top: '-60%', right: '-20%', height: '80%', width: '80%', backgroundColor: LIGHT_BLUE_THEME.COLOR_1, display: 'block' }} />
        </div>
      </div>
    )
  }

  _renderThemes() {
    let renderedThemes = []

    for (let i = 0; i < this.props.themes.length; i++) {
      let item = this.props.themes[i]
      renderedThemes.push(
        <div key={item.NAME} onClick={() => this._onThemeSelected(item.NAME)} style={{ height: '30px', width: '30px', marginTop: '8%', marginBottom: '8%', marginLeft: '8%', marginRight: '4%', display: 'block' }}>
          <div style={{ position: 'relative', top: '0', left: '0', height: '80%', width: '80%', backgroundColor: item.BACKGROUND_COLOR, display: 'block' }} />
          <div style={{ position: 'relative', top: '-60%', right: '-20%', height: '80%', width: '80%', backgroundColor: item.COLOR_1, display: 'block' }} />
        </div>
      )
    }

    return (renderedThemes)
  }

  render() {
    return (
      <div id={'ThemeSelector'} className={this.props.containerClass} style={this.props.positionStyle}>
        <input type='checkbox' id={this.props.checkboxId} />
        <label id={this.props.labelId} htmlFor={this.props.checkboxId} style={{ background: 'rgb(200, 200, 200)' }}>
          <Setting className='setting' innerColor='white' outerColor='rgb(200, 200, 200)' />
        </label>
        <div className={this.props.float + ' column jc-center'} style={{ backgroundColor: 'rgb(200, 200, 200)' }}>
          <div className='Container column jc-center' style={{ color: 'dimgray', textAlign: 'center', height: '30px' }}>
            <b>Theme Selector</b>
          </div>
          {this._renderMainThemes()}
          <div className='Container row' style={{ flexWrap: 'wrap', height: '60%' }}>
            {this._renderThemes()}
          </div>
        </div>
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    positionStyle: state.ThemeSelectorReducer.positionStyle,
    checkboxId: state.ThemeSelectorReducer.checkboxId,
    labelId: state.ThemeSelectorReducer.labelId,
    containerClass: state.ThemeSelectorReducer.containerClass,
    float: state.ThemeSelectorReducer.float,
    themes: state.ThemeSelectorReducer.themes
  }
}

export default connect(mapStateToProps)(ThemeSelector)