// SYNTAX

// // if (condition1) {
// // //     do this
// // // }
// // // else
// // //     if (condition2) {
// // //         do this
// // //     }
// // // else {
// // //     if nothing else matched do this
// // // }

// // // let weather = "foggy";

// // // if (weather == "sunny") {
// // //     console.log("Well, I better wear some suncream!")
// // // } else if(weather == "rainy") {
// // //     console.log("Better take an umbrella")
// // // } else {
// // //     console.log("Hmmm, it could go either way!")
// // // }

// // // == equal
// // // === strict equal
// // // // != equal
// // // // !== strict not equal
// // // >= more than or equal to
// // // <= less than or equal to
// // // > more than
// // // < less than
// // // % modulus, gives the remainder

// // let place = "Manc";
// // let weather = "Cloudy";

// // if (place == "Manc" && weather == "Sunny") {
// //     console.log("Check again");
// // }
// // else if (place == "Manc" && weather == "Rain") {
// //     console.log("Obvs");
// // }
// // else {
// //     console.log("What, it isn't raining?");
// // }

// // // && and
// // // || or

// // const grade = 2;

// // switch(true) {
// //     case grade >= 70:
// //         console.log("Distinction");
// //         break;
// //     case grade >= 60:
// //         console.log("Merit");
// //         break;
// //     case grade >= 50:
// //         console.log("Pass");
// //         break;
// //     default:
// //         console.log("Failed");
// // }

// // Activity 1
// console.log("Activity 1");
// let age = Math.floor((Math.random()*50));
// if (age >17){
//     console.log("You are old enough to serve.");
// } else {
//     console.log("Sorry, you are too young to drink!");
// }

// // Activity 1 - Stretch
// console.log("Activity 1 - Stretch");

// let country = "UK";
// if (age >17 && country === "UK") {
//     console.log(`Your age is ${age}. You are old enough to serve`);
// }
// else {
//     console.log(`Your age is ${age}. Sorry, you are too young to drink`);
// }

// // Activity 2

// console.log("Activity 2");

// let topping = "Mushroom";

// switch(topping) {
//     case "Pepperoni":
//     case "Bacon":
//         console.log(`It is important that I have ${topping} on my pizza`);
//         break;
//     case "Mushroom":
//     case "Chicken":
//         console.log(`I don't mind having ${topping} on my pizza`);
//         break;
//     default:
//         console.log(`${topping} should not be on my pizza`);
// }

// // Activity 3

// console.log("Activity 3");

// let password = "abcdefghijkl";

// if (password.length<8) {
//     console.log("Password is too short. Must be at least 8 letters");
// }
// else {
//     console.log(`The password is ${password}`);
// }

// // Activity 3 - Stretch

// console.log("Activity 3 - Stretch");

// let num = Math.floor(Math.random()*60);
// if (num % 3 == 0 && num % 5 == 0 && num>0){
//     console.log(`The number was ${num}, this is divisble by both 3 and 5`);
// }
// else
// if (num % 3 == 0 && num>0) {
//     console.log(`The number was ${num}, this is divisible by 3`);
// }
// else
// if (num % 5 == 0 && num>0) {
//     console.log(`The number was ${num}, this is divisible by 5`);
// }
// else {
//     console.log(`The number was ${num}. This is not divisible by either 3 or 5`);
// }

// // Activity 4

// console.log("Activity 4");

// let num1 = Math.floor(Math.random()*60);

// if (num1 % 3 == 0 && num1 % 5 == 0 && num1>0){
//     console.log(`Fizz Buzz`);
// }
// else
// if (num1 % 3 == 0 && num1>0) {
//     console.log(`Fizz`);
// }
// else
// if (num1 % 5 == 0 && num1>0) {
//     console.log(`Buzz`);
// }
// else {
//     console.log(`${num1}.`);
// }

// // Activity 5

// console.log("Activity 5");

// let num2 = 8008;
// let numString = num2.toString();
// let reverseNumString = numString.split('').reverse().join('');

// if (reverseNumString == num2) {
//     console.log(`${num2} is a palindrome.`)
// }
// else {
//     console.log(`${num2} is not a palindrome.`)
// }

//  Activity 6

// console.log("Activity 6");

// let hour = Math.floor(Math.random()*24);
// let minute = Math.floor(Math.random()*60);
// let hourString = hour.toString();
// let minuteString = minute.toString();


// if (minuteString.length <= 1){
//     minuteString = minuteString.padStart(2, '0')
// };
// if (hourString.length <= 1){
//     hourString = hourString.padStart(2, '0')
// };
// let placeOfWork = "The Office";
// let townOfHome = "Blackpool";

// if (hourString < "07" || hourString > "22"){
//     console.log(`The time is ${hourString}:${minuteString}, I am asleep and so should you be!!`);
// }
// else
// if (hourString <= "08" || hourString >= "18") {
//     console.log(`The time is ${hourString}:${minuteString}, I am at home in ${townOfHome}`);
// }
// else
// if (hourString >= "17") {
//     console.log(`The time is ${hourString}:${minuteString}, I am commuting from ${placeOfWork} to ${townOfHome}`);
// }
// else
// if (hourString < "09") {
//     console.log(`The time is ${hourString}:${minuteString}, I am commuting from ${townOfHome} to ${placeOfWork}`);
// }
// else
// if (hourString >= "12" && hourString < "13"){
//     console.log(`The time is ${hourString}:${minuteString}, I am on my lunch break!!`);
// }
// else {
//     console.log(`The time is ${hourString}:${minuteString}, I am at work at ${placeOfWork}`);
// }

// // Activity 7

// console.log("Activity 7");

// let str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
// let vowel = ["a", "e", "i", "o", "u"];
// let strString = str.split('').reverse();

// // console.log(strString.length);

// for(let i = 0; i < strString.length; i++){
//     if(strString[i] == vowel.values){
//         console.log(`The last vowel in the sequence is ${strString[i]}`);
//     }
// }
// // Consider this one a failure

// Activity 8

// console.log("Activity 8");

// let word = "poipoipoipoipoipo";
// let wordArray = word.split('');
// let lastLetter = wordArray.length-1;
// // console.log(lastLetter);

// if(wordArray[0] == wordArray[lastLetter]){
//     console.log(`True - The first and last letters are the same.`);
// }
// else {
//     console.log(`False - The first and last letters are not the same.`)
// }

// Activity 9

// console.log("Activity 9");

// let num1 = Math.floor(Math.random()*20);
// let num2 = Math.floor(Math.random()*20);
// let num3 = num1*num2;

// if (num3 % 2 === 0) {
//     console.log(`${num3} is even`);
// }
// else {
//     console.log(`${num3} is odd`);
// }