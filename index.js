// -------------------------
console.log('Hello world!');

// -------------------------
let firstName = 'Oles';
let lastName = 'Bober';
console.log(firstName);

// -------------------------
const interestRate = 0.3;
console.log(interestRate);

// -------------------------
firstName = undefined;
let selectedColor = null;

// -------------------------
console.log(typeof(lastName));
console.log(typeof(selectedColor));

// -------------------------
let person = {
    name: 'Roman',
    age: 23,
};
console.log(person);
person.age = 24;
console.log(person.age);
console.log(person['name']);

// -------------------------
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
selectedColors[4] = true;
console.log(selectedColors);

// -------------------------
function greet(name) {
    console.log('a suh ' + name);
}
greet('dood');

// -------------------------
function square(number) {
    return number * number;
}
console.log(square(36.9));