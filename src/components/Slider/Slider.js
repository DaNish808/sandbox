import React, { PureComponent } from 'react';
import Pointable from 'react-pointable';
import { mousePositionPercentElement } from './getMousePos';

import './Slider.scss';


class Slider extends PureComponent {
  constructor() {
    super()
    this.buttonSize = 20
    this.changeInterval = null
    this.sliderBarEl = null
    this.mouseDown = false
  }

  calcNearestValue = percent => {
    let { min, max, step } = this.props
    min = parseFloat(min)
    max = parseFloat(max)
    step = parseFloat(step)

    const clickOffsetVal = (max - min) * percent
    let stepVal = Math.round(clickOffsetVal / step)
    return stepVal * step + min
  }

  convert(value, min, max) {
    return value / (max - min) * 100
  }

  handleSliderbarMouse = down => e => {
    if(down) this.updateValue(e)
    this.mouseDown = down
  }

  handleMouseMove = e => {
    if(this.mouseDown) {
      this.unFocus()
      this.updateValue(e)
    }
  }
  unFocus() {
    if (document.selection) {
      document.selection.empty()
    } else {
      window.getSelection().removeAllRanges()
    }
  } 
  
  updateValue = e => {
    const { x: xFraction } = mousePositionPercentElement(e, this.sliderBarEl)
    const value = this.calcNearestValue(xFraction)
    console.log(value);
    if(value >= this.props.min && value <= this.props.max)this.props.onChange(value)  
  }

  render() {
    let { 
      min, max, step, value, 
      minLabel, maxLabel, valueLabel, 
    } = this.props

    if(!min) min = 0;
    if(!max) max = 1;
    if(!step) step = (max - min) / 10;
    if(!value && value !== 0) value = (max - min) / 2;
    if(!minLabel) minLabel = min;
    if(!maxLabel) maxLabel = max;
    if(!valueLabel) valueLabel = value;

    return (
      <Pointable
        onPointerDown={this.handleSliderbarMouse(true)} 
        onPointerUp={this.handleSliderbarMouse(false)} 
        onPointerMove={this.handleMouseMove} 
      >
        <div className="slider-container">
          <div className="sliderbar-container" 
            onMouseDown={this.handleSliderbarMouse(true)} 
            onMouseUp={this.handleSliderbarMouse(false)} 
            onMouseMove={this.handleMouseMove} 
            ref={el => this.sliderBarEl = el}
          >
            <div className="endpoint-left endpoint" style={{
              height: this.buttonSize,
            }}></div>
            <div className="sliderbar sliderbar-unfilled"></div>
            <div className="sliderbar sliderbar-filled" style={{
              width:`${this.convert(value, min, max)}%`
            }}></div>
            <div className="slider-button" style={{
              left:`${this.convert(value, min, max)}%`,
              width: this.buttonSize,
              height: this.buttonSize,
            }}>
              <div className="slider-button-indicator" style={{
                width: this.buttonSize / 2,
                height: this.buttonSize / 2,
              }}></div>
            </div>
            <div className="endpoint-right endpoint" style={{
              height: this.buttonSize,
            }}></div>
          </div>
          <div className='info-container'>
            <span className="slider-label min-slider-label">{minLabel}</span>
            <div className="value-slider-label-container">
              <span className="slider-label value-slider-label" style={{
                left:`${this.convert(value, min, max)}%`,
              }}>{valueLabel || value}</span>
            </div>
            <span className="slider-label max-slider-label">{maxLabel}</span>
          </div>
        </div>
      </Pointable>
    )
  }
}


export default Slider