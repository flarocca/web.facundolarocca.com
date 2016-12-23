import React, { Component } from 'react';
import '../css/Experience-section.css';
import AppStore from '../stores/AppStore';
import { Element, scroller } from 'react-scroll';
import ImageProvider from '../services/ImageProvider';
// import Slider from 'react-slick';
import WEB from '../images/web.png';

export default class Experience extends Component {
  constructor(props) {
    super(props);

    this._imageProvider = new ImageProvider();
    this._onAppSessionChange = this._onAppSessionChange.bind(this);
    this.state = {
      languageSet: this.props.languageSet
    }
  }

  componentDidMount() {
    AppStore.addChangeListener(this._onAppSessionChange);
  }

  _onAppSessionChange() {
    this.setState({ languageSet: AppStore.getLanguageSet() });
    var menu = AppStore.getMenuSelected();
    if (menu === 'EXPERIENCE') {
      scroller.scrollTo(menu, {
        duration: 1000,
        delay: 0,
        smooth: true,
        offset: -40
      });
    }
  }

  render() {
    // var settings = {
    //   dots: true,
    //   infinite: true,
    //   speed: 2000,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   autoplay: true,
    //   autoplaySpeed: 2000
    // };
    return (
      <div>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <Element name="EXPERIENCE" />
        <div className="Experience">
          <h2 style={{ color: '#ffffff', marginTop: '50px', marginBottom: '50px' }}>{this.state.languageSet.EXPERIENCE}</h2>
          <div className="Slider-content">
            <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'flex-start', border: "white solid 2px", height: "400px", width: "100%" }}>
              <img style={{}} src={WEB} alt="web"/>
              <span>
                <p>some text</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
/*
<div className="Slider-content">
            <Slider {...settings}>
              <div>
                <img src='http://placekitten.com/g/400/200' />
              </div>
              <div><img src='http://placekitten.com/g/400/200' /></div>
              <div><img src='http://placekitten.com/g/400/200' /></div>
              <div><img src='http://placekitten.com/g/400/200' /></div>
            </Slider>
</div>
*/