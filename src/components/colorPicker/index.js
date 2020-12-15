import React, { Component } from "react";
import "./index.css";
const classNames = require('classnames');

export default class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedColor:"" };
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor(newColor) {
    // console.log(newColor);
    this.setState({ selectedColor: newColor });
  }

  render() {
    // console.log(this.props.colorPickerOptions);
    console.log(this.state.selectedColor);
    // let selectedColor="#0fd085";
    return (
      <div>
        <div className="layout-row justify-content-center">
          <div className="card mt-75">
            <div className="canvas" data-testid="selectedColor" style={{background:`${this.state.selectedColor}`}}>
              <p className="text-center mx-auto px-5">{this.state.selectedColor}</p>
            </div>
            <div className="card-actions">
              <div className="layout-row justify-content-center align-items-center" data-testid="colorPickerOptions">
                {this.props.colorPickerOptions.map((color, index) => {
                  return (
                    <div
                      className={
                        classNames({
                          'color-box': true,
                          'mx-8': true,
                          'my-15': true,
                          'selected': this.state.selectedColor === color
                        })
                      }
                      key={color}
                      style={{background:`${color}`}}
                      onClick={()=>{this.changeColor(color)}}
                    ></div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
