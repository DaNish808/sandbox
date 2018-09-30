import React from 'react';
import Link from 'gatsby-link';
import Slider from '../components/Slider/Slider';

import './styles/slider.scss';


class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 5 
    };
  }

  sliderHandler = value => this.setState({ value });

  render() {
    const { value } = this.state;

    return (
      <main className="page slider-page">
        <h1>Customizable Slider Component</h1>
        <Slider
          min="0"
          max="10"
          step="1"
          value={value}
          minLabel="Zilch"
          onChange={this.sliderHandler}
        />
      </main>
    );
  }
}


export default IndexPage;
