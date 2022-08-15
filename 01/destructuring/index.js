// array destructuring

const numbers = [1, 2, 3];
[num1, , num3, num4] = numbers;
console.log(num1, num3, num4); // num4 is undefined

// object destructuring

const { name, age, gender } = { name: "Mustafa", age: 22 };
console.log(name);
console.log(age);
console.log(gender); //undefined
