import React, { Component } from 'react';
import './App.scss';
import avatar from './assets/avatar.jpg';

class App extends Component {
  render() {
    return <main className="app">
      <Avatar src = {person.avatar} alt = {person.name}/>
      <Introduction content = {person.introduce()}></Introduction>
      <AboutMe content = {person.aboutMe}></AboutMe>
      <EducationList educations = {person.educations}></EducationList>
    </main>;
  }
}

class Introduction extends Component {
  render() {
    return <section className="introduction" >
      <h1>HELLO,</h1>
      <h2>{this.props.content.toUpperCase()}</h2>
    </section>
  }
}

class AboutMe extends Component {
  render() {
    return <section className="about-me">
      <h1>ABOUT ME</h1>
      <p>{this.props.content}</p>
    </section>
  }
}

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

class Avatar extends Component {
  render() {
    return <img className="avatar" src={this.props.src} alt={this.props.alt}/>;
  }
};

class Person {
  constructor(name, age, avatar, aboutMe, educations) {
    this.name = name;
    this.age = age;
    this.avatar = avatar;
    this.aboutMe = aboutMe;
    this.educations =educations;
  }

  introduce() {
    return `my name is ${this.name} ${this.age}yo and this is my resume/cv`;
  }
}

class Education {
  constructor(year, title, content) {
    this.year = year;
    this.title = title;
    this.content = content;
  }
}

const person = new Person('Kamil',
  24,
  avatar,
  `Monkey is a common name that may refer to groups or species of mammals, in part, the simians of infraorder Simiiformes.
   The term is applied descriptively to groups of primates, such as families of new world monkeys and old world monkeys. 
   Monkeys are generally considered to be intelligent, especially the old world monkeys of Catarrhini.`,
  [new Education(1990, 'I was born in Katowice', `Lemurs, lorises, and galagos are not monkeys; instead they are strepsirrhine primates.`),
    new Education(2005, 'Secondary school specializing in artistic', `Like monkeys, tarsiers are haplorhine primates; however, they are also not monkeys.`),
    new Education(2009, 'First level graduation in Graphic Design', ' Simians and tarsiers emerged within haplorrhines some 60 million years ago.'),
    new Education(2012, 'Second level graduation in Graphic Design', 'The many species of monkey have varied relationships with humans.')]);

export default App;
