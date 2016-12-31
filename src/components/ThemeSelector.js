import React, { Component } from 'react';

export default class ThemeSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      themes: this.props.themes ? this.props.themes : [],
      backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : 'dimgray',
      buttonClass: this.props.buttonClass ? this.props.buttonClass : ''
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="main">
        <input type="checkbox" id="navigation" />
        <label>+</label>
        <div className="right">
          muestra
        </div>
      </div>
    );
  }

  // render() {
  //   return (
  //     <div className="Container column fixed" style={{ top: "0", left: "0", display: "flex" }} >

  //       <div className="Container row" style={{ top: "0", left: "0", width: "210px", backgroundColor: "transparent", display: "flex" }}>
  //         <div className="Container column" style={{ width: "20%", backgroundColor: "transparent", display: "flex" }}>
  //           <div style={{ height: "40px", backgroundColor: "white", display: "flex" }}>

  //           </div>
  //         </div>
  //         <div className="Container column" style={{ width: "80%", backgroundColor: this.state.backgroundColor }}>
  //           <div className="Container column jc-center" style={{ textAlign: "center", height: "30px", backgroundColor: "transparent", display: "flex" }}>
  //             Theme Selector
  //           </div>
  //           <div className="Container row" style={{ height: "80px", backgroundColor: "transparent", marginRight: "20%" }}>
  //             <div style={{ height: "50px", width: "50%", marginTop: "8%", marginBottom: "8%", marginLeft: "8%", marginRight: "4%", backgroundColor: "transparent", display: "relative" }}>
  //               <div style={{ position: "relative", top: "0", left: "0", height: "80%", width: "80%", backgroundColor: "gray", display: "block" }}>

  //               </div>
  //               <div style={{ position: "relative", top: "-60%", right: "-20%", height: "80%", width: "80%", backgroundColor: "white", display: "block" }}>

  //               </div>
  //             </div>
  //             <div style={{ height: "50px", width: "50%", marginTop: "8%", marginBottom: "8%", marginLeft: "4%", marginRight: "8%", backgroundColor: "transparent", display: "absolute" }}>
  //               <div style={{ position: "relative", top: "0", left: "0", height: "80%", width: "80%", backgroundColor: "gray", display: "block" }}>

  //               </div>
  //               <div style={{ position: "relative", top: "-60%", right: "-20%", height: "80%", width: "80%", backgroundColor: "white", display: "block" }}>

  //               </div>
  //             </div>
  //           </div>
  //           <div className="Container row" style={{ flexWrap: "wrap", height: "60%", backgroundColor: "transparent", display: "flex", marginRight: "10%", display: "flex" }}>
  //             <div style={{ height: "30px", width: "30px", marginTop: "8%", marginBottom: "8%", marginLeft: "8%", marginRight: "4%", backgroundColor: "transparent", display: "block" }}>
  //               <div style={{ position: "relative", top: "0", left: "0", height: "80%", width: "80%", backgroundColor: "gray", display: "block" }}>

  //               </div>
  //               <div style={{ position: "relative", top: "-60%", right: "-20%", height: "80%", width: "80%", backgroundColor: "white", display: "block" }}>

  //               </div>
  //             </div>
  //             <div style={{ height: "30px", width: "30px", marginTop: "8%", marginBottom: "8%", marginLeft: "8%", marginRight: "4%", backgroundColor: "transparent", display: "block" }}>
  //               <div style={{ position: "relative", top: "0", left: "0", height: "80%", width: "80%", backgroundColor: "gray", display: "block" }}>

  //               </div>
  //               <div style={{ position: "relative", top: "-60%", right: "-20%", height: "80%", width: "80%", backgroundColor: "white", display: "block" }}>

  //               </div>
  //             </div>
  //             <div style={{ height: "30px", width: "30px", marginTop: "8%", marginBottom: "8%", marginLeft: "8%", marginRight: "4%", backgroundColor: "transparent", display: "block" }}>
  //               <div style={{ position: "relative", top: "0", left: "0", height: "80%", width: "80%", backgroundColor: "gray", display: "block" }}>

  //               </div>
  //               <div style={{ position: "relative", top: "-60%", right: "-20%", height: "80%", width: "80%", backgroundColor: "white", display: "block" }}>

  //               </div>
  //             </div>
  //             <div style={{ height: "30px", width: "30px", marginTop: "8%", marginBottom: "8%", marginLeft: "8%", marginRight: "4%", backgroundColor: "transparent", display: "block" }}>
  //               <div style={{ position: "relative", top: "0", left: "0", height: "80%", width: "80%", backgroundColor: "gray", display: "block" }}>

  //               </div>
  //               <div style={{ position: "relative", top: "-60%", right: "-20%", height: "80%", width: "80%", backgroundColor: "white", display: "block" }}>

  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
}