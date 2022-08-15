const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5, 6];
console.log(newNumbers);

const person = {
  name: "Mustafa",
};

const newPerson = {
  ...person,
  age: 22,
};

const filter = (...args) => {
  return args.filter((el) => el === 1);
};

console.log(filter(1, 2, 3));
