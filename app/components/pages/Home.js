import React from 'react';

import Link from 'app/components/Link';

const Home = () => {
  return (
  <div className="callout">
    <h5>Home</h5>
    <p>This is the home page!</p>
    <Link
      href="/about"
      className="small button"
    >
      About »
    </Link>
  </div>);
}

export default Home;
