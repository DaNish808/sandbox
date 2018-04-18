import React, { PureComponent } from 'react'
import './Slideshow.scss'


const style = {
  outRight: {
    left: '100%'
  },
  outLeft: {
    left: '-100%'
  },
  inCenter: {
    left: '0'
  },
}


class Slideshow extends PureComponent {
  constructor() {
    super()
    this.width = 75;
    this.state = {
      length: 0,
      currentSlide: -1,
      outgoingSlide: -1,
      currentSlideStyle: style.inCenter,
      outgoingSlideStyle: null
    }
  }

  componentDidMount() {
    this.setState({
      length: this.props.children.length,
      currentSlide: 0
    })
  }

  handleClick = direction => () => {
    let { 
      currentSlide, outgoingSlide
    } = this.state
    let currentSlideStyle,
        outgoingSlideStyle,
        outgoingSlideStyleFinal

    outgoingSlide = currentSlide
    outgoingSlideStyle = style.inCenter
    if(direction === 'right') {
      currentSlide = (this.state.currentSlide + 1) % this.state.length
      currentSlideStyle = style.outLeft
      outgoingSlideStyleFinal = style.outRight
    }
    else if(direction === 'left') {
      currentSlide = this.state.currentSlide > 0 ? this.state.currentSlide - 1 : this.state.length - 1
      currentSlideStyle = style.outRight
      outgoingSlideStyleFinal = style.outLeft
    }

    this.setState({
      ...this.state,
      currentSlideStyle,
      outgoingSlideStyle: style.inCenter,
      currentSlide,
      outgoingSlide,
    }, () => {
      setTimeout(() => {
        this.setState({
          ...this.state,
          currentSlideStyle: style.inCenter,
          outgoingSlideStyle: outgoingSlideStyleFinal
        })
        setTimeout(() => {
          if(this.state.outgoingSlide !== -1) {
            this.setState({
              ...this.state,
              outgoingSlide: -1,
            })
          }
        }, 300)
      }, 0) // not sure why but transitions don't work without the setTimeout func...
    })
  }

  slideInFrom = side => {
    if(side === 'left') {}
    else if(side === 'right') {}
  }
  slideOut = side => {
    if(side === 'left') {}
    else if(side === 'right') {}
  }

  render() {
    const { 
      currentSlide, outgoingSlide,
      currentSlideStyle, outgoingSlideStyle
    } = this.state
    const { children } = this.props
    return (
      <div className="slideshow-container">
        <div className="slideshow">
          {currentSlide > -1 && 
            <div className="slideshow-slide current-slide" style={currentSlideStyle}>
                {children[currentSlide]}
            </div>
          }
          {outgoingSlide > -1 && 
            <div className="slideshow-slide outgoing-slide" style={outgoingSlideStyle}>
                {children[outgoingSlide]}
            </div>
          }
        </div>
        <div className="click-left" onClick={this.handleClick('left')}></div>
        <div className="click-right" onClick={this.handleClick('right')}></div>
      </div>
    )
  }
}

export default Slideshow
