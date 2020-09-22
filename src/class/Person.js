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

export default Person;