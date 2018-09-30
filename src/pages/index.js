import React from 'react';
import Link from 'gatsby-link';
import MagicMenuBurger from '../components/MagicMenuBurger/MagicMenuBurger.js';

import './styles/index.scss';

class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = {
      menuOpen: false
    };
  }

  handleMenuBurger = () => {
    const newMenuState = !this.state.menuOpen;
    this.setState({ menuOpen: newMenuState });
    window.sessionStorage.setItem('menuOpen', newMenuState);
  }

  componentDidMount = () => {
    const savedMenuState = JSON.parse(window.sessionStorage.getItem('menuOpen'));
    if(savedMenuState !== undefined) this.setState({ menuOpen: savedMenuState });
  }

  render() {
    const { menuOpen } = this.state;
    return (
      <main className="page home-page">
        <h2>Welcome!</h2>
        <MagicMenuBurger
          onClick={this.handleMenuBurger}
          menuOpen={menuOpen}
        />
        <section className={`page-links${menuOpen ? '' : ' rolled-up'}`}>
          <ul>
            <Link to="/parallaxer">
              <li>Parallaxer</li>
            </Link>
            <Link to="/slideshow">
              <li>Slideshow</li>
            </Link>
            <Link to="/slider">
              <li>Slider</li>
            </Link>
            {/* <Link to="/bubbles">
              <li>Bubbles</li>
            </Link> */}
          </ul>
        </section>
      </main>
    );
  }
}

export default IndexPage;
