import React, { Component } from 'react';
import AppActions from '../../actions/AppActions';

export default class AppHeaderMobile extends Component {
  constructor(props) {
    super(props);

    this._onClick = this._onClick.bind(this);
  }

  render() {
    return (
      <div id="Header" className="Container row">
        <div className='hdr-mobile'>
          <span className='column column-item-x4 hdr-item-mobile' style={{ backgroundColor: this.props.theme.COLOR_1 }}>
            <a href="#" onClick={() => this._onClick('WHO_I_AM')} className='none-decoration' style={{ color: this.props.theme.BACKGROUND_COLOR }}>
              <b>{this.props.languageSet.WHO_I_AM}</b>
            </a>
          </span>
          <span className='column column-item-x4 hdr-item-mobile' style={{ backgroundColor: this.props.theme.COLOR_2 }}>
            <a href="#" onClick={() => this._onClick('WHAT_I_DO')} className='none-decoration' style={{ color: this.props.theme.BACKGROUND_COLOR }}>
              <b>{this.props.languageSet.WHAT_I_DO}</b>
            </a>
          </span>
          <span className='column column-item-x4 hdr-item-mobile' style={{ backgroundColor: this.props.theme.COLOR_3 }}>
            <a href="#" onClick={() => this._onClick('RESUME')} className='none-decoration' style={{ color: this.props.theme.BACKGROUND_COLOR }}>
              <b>{this.props.languageSet.RESUME}</b>
            </a>
          </span>
          <span className='column column-item-x4 hdr-item-mobile' style={{ backgroundColor: this.props.theme.COLOR_4 }}>
            <a href="#" onClick={() => this._onClick('CONTACT')} className='none-decoration' style={{ color: this.props.theme.BACKGROUND_COLOR }}>
              <b>{this.props.languageSet.CONTACT}</b>
            </a>
          </span>
        </div>
      </div>
    );
  }

  _onClick(id) {
    AppActions.menuSelected(id);
  }
}