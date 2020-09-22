import React, {Component} from "react";

class Avatar extends Component {
  render() {
    return <img className="avatar" src={this.props.src} alt={this.props.alt}/>;
  }
};

export default Avatar;