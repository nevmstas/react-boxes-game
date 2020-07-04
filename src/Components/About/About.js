import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="about-section">
        <h2 className="about-section__title">It is my first small pet project. Don't judge me pls :D</h2>

        <h3 className="about-section__github">
          <span className="github">github:</span> <a href="https://github.com/nevmstas">nevmstas</a>
        </h3>
        <h3 className="about-section__mail">
          <span className="mail">mail:</span> nevmyvakastas@gmail.com
        </h3>
        <h3 className="about-section__thanks">Thanks you for playing!</h3>
      </div>
    );
  }
}

export default About;
