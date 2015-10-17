import React from 'react';

import Link from 'app/components/Link';

const Home = () => {
  return (
  <div>
    <b>This is the home page!</b>
    <div>
      <Link
        href="/about"
      >
        About page
      </Link>
    </div>
  </div>);
}

export default Home;
