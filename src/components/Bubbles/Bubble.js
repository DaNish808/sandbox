import React, { PureComponent } from 'react';

class Bubble extends PureComponent {
  render() {
    const { 
      cx, cy, r, 
      colors 
    } = this.props;
    return (
      <div className="bubble" style={{
        top: cy,
        left: cx,
        height: 2 * r + 'px',
        width: 2 * r + 'px',
        background: `radial-gradient(circle at ${25}% ${25}%, ${colors.join(', ')})`
      }}>
      </div>
    );
  }
}

export default Bubble;