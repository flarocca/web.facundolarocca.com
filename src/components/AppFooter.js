import React, { Component } from 'react';
import ImageSources from '../constants/ImageSources';
import ImageProvider from '../services/ImageProvider';

export default class AppFooter extends Component {
  constructor(props) {
    super(props);

    this._imageProvider = new ImageProvider();
  }

  render() {
    return (
      <div style={styles.container}>
        <hr style={{ width: "75%", height: "3px", border: "0", boxShadow: "0 10px 10px -10px #8c8b8b inset", marginTop: "5%", marginBottom: "2%" }} />
        <p style={{ fontSize: "larger", fontFamily: '"Courier New", Courier, monospace', color: 'white' }}>
          <span style={{ fontSize: "25px", fontFamily: '"Courier New", Courier, monospace', color: 'white' }}>Facundo La Rocca</span>
          <br /><br />
          Software developer & engineer.
        </p>
        <span style={styles.linksContainer}>
          <span><a href={ImageSources.STACKOVERFLOW_PROFILE}><img src={this._imageProvider.getImage('STK')} className="App-footer-img" alt="logo" /></a></span>
          <span><a href={ImageSources.LINKEDIN_PROFILE}><img src={this._imageProvider.getImage('LIN')} className="App-footer-img" alt="logo" /></a></span>
          <span><a href={ImageSources.GITHUB_PROFILE}><img src={this._imageProvider.getImage('GITW')} className="App-footer-img" alt="logo" /></a></span>
        </span>
        <span style={styles.react}>
          <p style={styles.text}>Made with <i><a href={ImageSources.REACT} style={styles.text}>ReactJS.</a></i></p>
          <a href={ImageSources.REACT}><img src={this._imageProvider.getImage('REC')} className="App-footer-logo" alt="logo" /></a>
        </span>
      </div>
    );
  }
}

var styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgba(34, 34, 34, 1)",
    justifyContent: "center"
  },
  linksContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "1%"
  },
  text: {
    fontSize: "small",
    color: "white",
    display: "inline-block",
    textDecoration: "none",
    fontFamily: '"Courier New", Courier, monospace'
  },
  react: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
}