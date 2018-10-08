import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    const opacityIn= this.props.opacity

    if (opacityIn >= 0.2) {
      return (
        <div className="color-box" style={{opacity: opacityIn}}>
          {<ColorBox opacity={opacityIn - 0.1}/>}
        </div>
      )
    } else {
      return null
    }
  }

}
