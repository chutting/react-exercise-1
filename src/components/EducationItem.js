import React, {Component} from "react";

class EducationItem extends Component {
  render() {
    return <div className='education_item' key={`education_item${this.props.id}`}>
      <div className="education_year">{this.props.value.year}</div>
      <div className="education_description">
        <h2 className="education_description_title">{this.props.value.title}</h2>
        <p className="education_description_content">{this.props.value.content}</p>
      </div>
    </div>
  }
}

export default EducationItem;