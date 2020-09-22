import React, { Component } from 'react';
import '../App.scss';
import avatar from '../assets/avatar.jpg';
import Introduction from './Introduction';
import EducationList from './EducationList';
import AboutMe from './AboutMe';
import Avatar from './Avatar';
import Person from '../class/Person';
import Education from '../class/Education';

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
