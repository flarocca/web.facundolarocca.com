import React, { Component } from 'react';
import '../css/App-footer.css';
import ImageSources from '../constants/ImageSources';
import ImageProvider from '../services/ImageProvider';

export default class AppFooter extends Component {
  constructor(props) {
    super(props);

    this._imageProvider = new ImageProvider();
  }

  render() {
    return (
      <div className="App-footer">
        <hr style={{ width: "75%", height: "3px", border: "0", boxShadow: "0 10px 10px -10px #8c8b8b inset", marginTop: "5%", marginBottom: "2%" }} />
        <p style={{ fontSize: "larger", fontFamily: '"Courier New", Courier, monospace', color: 'white' }}>
          <span style={{ fontSize: "25px", fontFamily: '"Courier New", Courier, monospace', color: 'white' }}>Facundo La Rocca</span> 
          <br /><br />
          Software developer & engineer.
        </p>
        <span className="App-footer-links">
          <span><a href={ImageSources.STACKOVERFLOW_PROFILE}><img src={this._imageProvider.getImage('STK')} className="App-footer-img" alt="logo" /></a></span>
          <span><a href={ImageSources.LINKEDIN_PROFILE}><img src={this._imageProvider.getImage('LIN')} className="App-footer-img" alt="logo" /></a></span>
          <span><a href={ImageSources.GITHUB_PROFILE}><img src={this._imageProvider.getImage('GITW')} className="App-footer-img" alt="logo" /></a></span>
        </span>
        <span className="App-footer-react">
          <p className="App-footer-text">Made with <i><a href={ImageSources.REACT} className="App-footer-text">ReactJS.</a></i></p>
          <a href={ImageSources.REACT}><img src={this._imageProvider.getImage('REC')} className="App-footer-logo" alt="logo" /></a>
        </span>
      </div>
    );
  }
}