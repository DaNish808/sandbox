import React from 'react'
import './Parallaxer.scss'

class Parallaxer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      scrollY: 0
    };
  };

  handleParallax = e => {
    this.setState({
      ...this.state,
      scrollY: window.scrollY
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleParallax)
  }

  render() {
    return (
        <div className="background-container">
          <div className="background background-a" style={{
            transform: `translateY(-${scrollY * 2}px)`
          }}></div>
          <div className="background background-b" style={{
            transform: `translateY(-${scrollY * 2}px)`
          }}></div>
          <div className="background background-c" style={{
            transform: `translateY(-${scrollY * 1.5}px)`
          }}></div>
        </div>
    )
  }
}

export default Parallaxer


