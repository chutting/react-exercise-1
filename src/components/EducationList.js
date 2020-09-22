import React, {Component} from "react";
import EducationItem from "./EducationItem.js"

class EducationList extends Component {
  render() {
    return (
      <div className='educations'>
        <h1>EDUCATION</h1>
        {
          this.props.educations.map((education, index) => {
            return <EducationItem value = {education} key={index}></EducationItem>
          })
        }
      </div>
    )
  }
}

export default EducationList;