import React, { Component } from 'react';
import AppActions from '../../actions/AppActions';
import AppStore from '../../stores/AppStore';

export default class AppHeaderMobile extends Component {
  constructor(props) {
    super(props);

    this._onStoreChange = this._onStoreChange.bind(this);
    this._onClick = this._onClick.bind(this);
    this.state = {
      languageSet: this.props.languageSet,
      theme: this.props.theme
    }
  }

  componentDidMount() {
    AppStore.addChangeListener(this._onStoreChange);
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onStoreChange);
  }

  render() {
    return (
      <div id="Header" className="Container row">
        <div className='hdr-mobile'>
          <span className='column column-item-x4 hdr-item-mobile' style={{ backgroundColor: this.state.theme.COLOR_1 }}>
            <a href="#" onClick={() => this._onClick('WHO_I_AM')} className='none-decoration' style={{ color: this.state.theme.BACKGROUND_COLOR }}>
              <b>{this.state.languageSet.WHO_I_AM}</b>
            </a>
          </span>
          <span className='column column-item-x4 hdr-item-mobile' style={{ backgroundColor: this.state.theme.COLOR_2 }}>
            <a href="#" onClick={() => this._onClick('WHAT_I_DO')} className='none-decoration' style={{ color: this.state.theme.BACKGROUND_COLOR }}>
              <b>{this.state.languageSet.WHAT_I_DO}</b>
            </a>
          </span>
          <span className='column column-item-x4 hdr-item-mobile' style={{ backgroundColor: this.state.theme.COLOR_3 }}>
            <a href="#" onClick={() => this._onClick('RESUME')} className='none-decoration' style={{ color: this.state.theme.BACKGROUND_COLOR }}>
              <b>{this.state.languageSet.RESUME}</b>
            </a>
          </span>
          <span className='column column-item-x4 hdr-item-mobile' style={{ backgroundColor: this.state.theme.COLOR_4 }}>
            <a href="#" onClick={() => this._onClick('CONTACT')} className='none-decoration' style={{ color: this.state.theme.BACKGROUND_COLOR }}>
              <b>{this.state.languageSet.CONTACT}</b>
            </a>
          </span>
        </div>
      </div>
    );
  }

  _onStoreChange() {
    this.setState({
      languageSet: AppStore.getLanguageSet(),
      theme: AppStore.getThemeSelected()
    });
  }

  _onClick(id) {
    AppActions.menuSelected(id);
  }
}