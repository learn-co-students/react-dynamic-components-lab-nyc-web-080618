import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {

    // let opacityValue = this.props.opacity

    if (this.props.opacity >0.2){
      return(
        <div className="color-box" style={{opacity: this.props.opacity}}>
          <ColorBox opacity = {this.props.opacity-0.1} />
        </div>
      )
    } else{
      return null
    }


    // return (
    //   <div className="color-box" style={{opacity: 2}}>
    //     {this.props.opacity}
    //   </div>
    // )
  }

}
