import React from 'react';
import Link from 'gatsby-link';

const IndexPage = () => (
  <main className="page home-page">
    <h2>Welcome!</h2>
    <p>Not much to see here yet, but have a look around :)</p>
    <section className="page-links">
      <h3>Pages</h3>
      <ul>
        <Link to="/parallaxer">
          <li>Parallaxer</li>
        </Link>
        <Link to="/slideshow">
          <li>Slideshow</li>
        </Link>
      </ul>
    </section>
  </main>
);

export default IndexPage;
