class Human {
  gender = "male";
  printTheGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  name = "Max";
  gender = "female";
  printTheName = () => console.log(this.name);
}

const person = new Person();
person.printTheName();
person.printTheGender();
