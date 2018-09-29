import React, { PureComponent } from 'react';
import Bubble from './Bubble';

import './Bubbles.scss';

class Bubbles extends PureComponent {
  render() {
    return (
      <section className="bubbles-container">
        <Bubble 
          cx={500} cy={300} r={100} 
          colors={[
            `hsla(${0}, ${100}%, ${80}%, ${0.2}) ${0}%`,
            `hsla(${180}, ${100}%, ${80}%, ${0.4}) ${8}%`,
            `hsla(${0}, ${100}%, ${80}%, ${0.4}) ${80}%`,
            `hsla(${270}, ${100}%, ${80}%, ${0.4}) ${120}%`,
            ]}
        />
      </section>
    );
  }
}

export default Bubbles;