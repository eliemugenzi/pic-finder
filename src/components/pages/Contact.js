import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Contact = () => (
  <div className="container">
    <div className="row">
      <div className="col s2"></div>
      <div className="col s8">
        <h3>Who is Elie TechGuy?</h3>
        <p><strong>Elie Mugenzi</strong> is a software engineer at Andela since May 2019. He is passionate about Programming since 2013, where he joined his Advanced Level at College Saint Andre, Nyamirambo.
        He is passionate about Javascript, Python and Java.
        </p>
        <h6>Contact Me</h6> <br />
        <div className="row">
          <div className="col">
            <SocialIcon url="https://twitter.com/ElieMugenzi" />
          </div>
          <div className="col">
            <SocialIcon url="https://github.com/eliemugenzi" />
          </div>
          <div className="col">
            <SocialIcon url="https://instagram.com/eliemugenzi" />
          </div>
          <div className="col">
            <SocialIcon url="https://www.linkedin.com/in/elie-mugenzi-818667129/" />
          </div>
        </div>
      </div>
      <div className="col s2"></div>
    </div>
  </div>
);

export default Contact;
