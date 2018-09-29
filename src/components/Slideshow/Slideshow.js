import React, { PureComponent } from 'react'
import './Slideshow.scss'


const style = {
  outRight: incoming => incoming ? 
    {
      left: '-100%',
      transition: 'none'
    } :
    {
      left: '-100%'
    },
  outLeft: incoming => incoming ? 
    {
      left: '100%',
      transition: 'none'
    } :
    {
      left: '100%'
    },
  inCenter: () => ({
    left: '0'
  }),
}


class Slideshow extends PureComponent {
  constructor() {
    super()
    this.width = 75;
    this.state = {
      slideLength: 0,
      currentSlide: -1,
      outgoingSlide: -1,
      currentSlideStyle: style.inCenter(),
      outgoingSlideStyle: null
    }
  }

  componentDidMount() {
    this.setState({
      slideLength: this.props.children.length,
      currentSlide: 0
    })
    window.addEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = ({ key }) => {
    if(new RegExp('Arrow[Left|Right]').exec(key)) {
      this.handleClick(key === 'ArrowRight' ? 'right' : 'left')()
    }
  }

  handleClick = direction => () => {
    // bring in current slide states
    const { 
      currentSlide, outgoingSlide, slideLength
    } = this.state
    let incomingSlideIndex, outgoingSlideIndex,
        incomingSlideStyleInitial, incomingSlideStyleFinal,
        outgoingSlideStyleInitial, outgoingSlideStyleFinal

    // switch current slide to outgoing slide
    outgoingSlideIndex = currentSlide
    outgoingSlideStyleInitial = style.inCenter()

    // give incoming slide initial properties
    if(direction === 'right') {
      incomingSlideIndex = (this.state.currentSlide + 1) % this.state.slideLength
      incomingSlideStyleInitial = style.outLeft('incoming')
      incomingSlideStyleFinal = style.inCenter()
      outgoingSlideStyleFinal = style.outRight()
    }
    else if(direction === 'left') {
      incomingSlideIndex = currentSlide > 0 ? currentSlide - 1 : slideLength - 1
      incomingSlideStyleInitial = style.outRight('incoming')
      incomingSlideStyleFinal = style.inCenter()
      outgoingSlideStyleFinal = style.outLeft()
    }

    this.setState({
      ...this.state,
      currentSlideStyle: incomingSlideStyleInitial,
      outgoingSlideStyle: outgoingSlideStyleInitial,
      currentSlide: incomingSlideIndex,
      outgoingSlide: outgoingSlideIndex
    }, () => {
      setTimeout(() => {
        this.setState({
          ...this.state,
          currentSlideStyle: style.inCenter(),
          outgoingSlideStyle: outgoingSlideStyleFinal
        })
        
        // reset outgoingSlide index
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
  // handleClick = direction => () => {
  //   // bring in current slide states
  //   let { 
  //     currentSlide, outgoingSlide
  //   } = this.state
  //   let currentSlideStyle,
  //       outgoingSlideStyle,
  //       outgoingSlideStyleFinal

  //   // switch current slide to outgoing slide
  //   outgoingSlide = currentSlide
  //   outgoingSlideStyle = style.inCenter()

  //   // give incoming slide initial properties
  //   if(direction === 'right') {
  //     currentSlide = (this.state.currentSlide + 1) % this.state.slideLength
  //     currentSlideStyle = style.outLeft()
  //     outgoingSlideStyleFinal = style.outRight()
  //   }
  //   else if(direction === 'left') {
  //     currentSlide = this.state.currentSlide > 0 ? this.state.currentSlide - 1 : this.state.slideLength - 1
  //     currentSlideStyle = style.outRight()
  //     outgoingSlideStyleFinal = style.outLeft()
  //   }

  //   this.setState({
  //     ...this.state,
  //     currentSlideStyle,
  //     outgoingSlideStyle: style.inCenter(),
  //     currentSlide,
  //     outgoingSlide,
  //   }, () => {
  //     setTimeout(() => {
  //       this.setState({
  //         ...this.state,
  //         currentSlideStyle: style.inCenter(),
  //         outgoingSlideStyle: outgoingSlideStyleFinal
  //       })
  //       setTimeout(() => {
  //         if(this.state.outgoingSlide !== -1) {
  //           this.setState({
  //             ...this.state,
  //             outgoingSlide: -1,
  //           })
  //         }
  //       }, 300)
  //     }, 0) // not sure why but transitions don't work without the setTimeout func...
  //   })
  // }

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
        <div className="click-left slideshow-button" onClick={this.handleClick('left')}></div>
        <div className="click-right slideshow-button" onClick={this.handleClick('right')}></div>
      </div>
    )
  }
}

export default Slideshow
