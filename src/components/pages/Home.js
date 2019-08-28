import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="home__container">
        <div className="home__container--intro">
          <h3>Welcome to PicFinder Lite</h3>
          <Link to="/search" className="waves-effect waves-light btn">Get started</Link>
        </div>
      </div>
    </div>
  )
}

export default Home