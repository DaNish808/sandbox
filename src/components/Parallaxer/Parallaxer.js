import React from 'react';
import './Parallaxer.scss';

class Parallaxer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      scrollY: 0
    };
    this.scrollListener = null;
  }

  handleParallax = e => {
    this.setState({
      ...this.state,
      scrollY: window.scrollY
    });
  }

  componentDidMount() {
    this.scrollListener = window.addEventListener('scroll', this.handleParallax);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollListener);
  }

  render() {
    const { scrollY } = this.state;
    const { top, bottom } = this.props;
    return (
        <div className="background-container" style={{
          top: top || 0,
          bottom: bottom || 0
        }}>
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
    );
  }
}

export default Parallaxer;


