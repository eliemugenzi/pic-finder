import React from 'react';

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s2"></div>
        <div className="col s8">
          <h3>About this App</h3>
          <p className="flow-text">
            This is a simple Image search engine built on top of Pixabay platform, where photographers build their Portfolios to grow professionally.
          </p>
          <a href="https://pixabay.com" rel="noopener noreferrer" target="_blank" className="btn">Learn more</a>
        </div>
        <div className="col s2"></div>
      </div>
    </div>
  )
}

export default About;