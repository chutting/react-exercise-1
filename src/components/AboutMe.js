import React, {Component} from "react";

class AboutMe extends Component {
  render() {
    return <section className="about-me">
      <h1>ABOUT ME</h1>
      <p>{this.props.content}</p>
    </section>
  }
}

export default AboutMe;