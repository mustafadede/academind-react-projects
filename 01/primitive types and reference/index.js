const number = 1;
const number2 = number;

console.log(number2);
// numbers, strings, booleans are primitive types whenever you reassign or you store
// objects and arrays are reference types

const person = {
  name: "Mustafa",
};

// const secondPerson = person;

const secondPerson = {
  ...person,
};

person.name = "Max";

console.log(secondPerson);
