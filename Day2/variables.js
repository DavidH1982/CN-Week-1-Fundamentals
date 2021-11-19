let i = 10;
console.log(i);

i = i + 2;
console.log(i);

// i now = 12


// camelCaseExample
// variable contatination
let favouriteDrink = "Red Bull";
console.log(favouriteDrink);
console.log("My favourite drink is " + favouriteDrink);

// Template literals

// let firstName = 'David';
// let age = 39;
// let favDrink = 'Red Bull';

// console.log(`My name is ${firstName}. I am ${age}. My favourite drink is ${favDrink}.`);

// They are BACKTICKS, not apostrophes!! (Next to number 1, under ESC key)
//  Activity 1
let firstName = "David";
let age = "39";
let favColor = "Red";
console.log(`My name is ${firstName}, my age is ${age}, and my favourite colour is ${favColor}`);

firstName = "Mandy";
age = "36";
favColor = "Blue";
console.log(`My name is ${firstName}, my age is ${age}}, and my favourite colour is ${favColor}`);

// Activity 2
let breakfast = "Cereal";
let lunch = "Sandwiches";
let dinner = "Chicken Kebab";
console.log(`Today's breakfast was ${breakfast}, for lunch I will be having ${lunch}, and for dinner this evening it is ${dinner}`);
breakfast = "Cereal again!";
lunch = "Seafood Pasta Salad";
dinner = "Sausage Casserole";
console.log(`Tomorrow's breakfast will be ${breakfast}, lunch will be ${lunch}, and tomorrow night's dinner will be ${dinner}`);

// Activity 3
let todaysDate = Date.now();
const birthday = new Date(2022, 7, 20);
let birthdaySeconds = birthday.getTime();
let secondsUntilBirthday = birthdaySeconds-todaysDate;
secondsUntilBirthday = Math.floor(secondsUntilBirthday/1000/60/60/24);
console.log(`There are ${secondsUntilBirthday} days until my next birthday`);

// Activity 4
let space1 = "X" ;
let space2 = " ";
let space3 = "O";
let space4 = "X";
let space5 = "O";
let space6 = " ";
let space7 = "O";
let space8 = " ";
let space9 = "X";

console.log("   |   |   ");
console.log(` ${space1} | ${space2} | ${space3}`);
console.log("   |   |   ");
console.log("...........")
console.log("   |   |   ");
console.log(` ${space4} | ${space5} | ${space6}`);
console.log("   |   |   ");
console.log("...........")
console.log("   |   |   ");
console.log(` ${space7} | ${space8} | ${space9}`);
console.log("   |   |   ");
