import React, {Component} from "react";

class Introduction extends Component {
  render() {
    return <section className="introduction" >
      <h1>HELLO,</h1>
      <h2>{this.props.content.toUpperCase()}</h2>
    </section>
  }
}

export default Introduction;