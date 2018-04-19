import React from 'react';
import Link from 'gatsby-link';
import Slideshow from '../components/Slideshow/Slideshow';
import Parallaxer from '../components/Parallaxer/Parallaxer';
import Smiley from '../components/Smiley/Smiley';

import './styles/slideshow.scss';


class Slide extends React.PureComponent {
  render() {
    const { title, msg, img } = this.props;
    return (
      <section className="slide">
        {img &&
          img()
        }
        {title &&
          <h3>{title}</h3>
        }
        {msg &&
          <p>{msg}</p>
        }
      </section>
    );
  }
}


const IndexPage = () => (
  <main className="page parallaxer-page">
    <Slideshow>
      <Slide
        title="Slideshow"
        msg="Welcome to the slideshow. Use the arrow keys or click on the left or right side of the slideshow to change slides"
        img={() => (
          <Smiley height='10rem' width='10rem'/>
        )}
      />
      <Slide
        title="It's Dynamic"
        msg="Each slide is simply a child component. You need a minimum of two, but there's no upper limit to how many you can add. As a bonus slides can be added or removed dynamically as needed."
      />
      <div className="slide use-anything">
        <h1>Use Anything</h1>
        <p>Use whatever you want as a slide. <code>div</code>s, <code>section</code>s, <code>img</code>s, <code>anything</code>!</p>
      </div>
      <img className="slide" src="https://upload.wikimedia.org/wikipedia/commons/0/09/LangtonsAntAnimated.gif"/>
    </Slideshow>
  </main>
);

export default IndexPage;
