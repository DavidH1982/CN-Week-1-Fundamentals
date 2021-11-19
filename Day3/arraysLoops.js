// let coffeeOrder = [
//     "Alex - Cortado",
//     "Ben - Cortado",
//     "Charlie - Whatever's new"
// ];

// console.log(coffeeOrder);

// //Change an item of an array
// coffeeOrder[1] = "Ann - Vanilla latte";
// console.log(coffeeOrder);

// //Properties of an array
// console.log(coffeeOrder.length);

// //Add items to end of array
// coffeeOrder.push("Donna - Espresso");
// console.log(coffeeOrder);

// //Removes last item of an array
// coffeeOrder.pop();
// console.log(coffeeOrder);

// let favSongs = [
//     "Somewhere Beyond The Sea",
//     "I Wont Give Up",
//     "Nessun Dorma",
// ];
// console.log(favSongs);

// favSongs.push("","");
// console.log(favSongs);

//Loops

// let favDrinks = [
//     "Red Bull",
//     "Tea",
//     "Lemonade"
// ];
// console.log(favDrinks[0]);
// console.log(favDrinks[1]);
// console.log(favDrinks[2]);

// FOR LOOP SYNTAX
// for(initial statement ; condition ; increment/decrement){
// output
// };

// for(let i = 0; i < favDrinks.length; i++){
//     console.log(favDrinks[i])
// }

// WHILE LOOP SYNTAX
// while (condition){
//      output;
//      increment/decrement;
// };

// let age = 15;

// while( age < 18 ){
    
//     console.log("You're a child");
//     age++;

// }

// console.log("You're an adult!");

// let cards = ["Diamond", "Spade", "Heart", "Club"];
// let currentCard = "Club";

// while(currentCard != "Spade"){
//     console.log(currentCard);
//     currentCard = cards[Math.floor(Math.random()*4)];
// }
// console.log(currentCard);

// Activity 1

// let favFilms = ["Hitman's Bodyguard", "Transporter", "Empire Records", "Men in Black", "District 9"];

// favFilms.push("Carrie", "The Shining");

// for( let i = 0; i < favFilms.length; i++){
//     console.log(favFilms[i]);
// }

// Activity 2

// let randomNumber = [];

// while (randomNumber.length < 6){
//     randomNumber.push(Math.ceil(Math.random()*49));
// }

// console.log(`${randomNumber}`);

// Activity 3

// let num = [];

// for ( let i = 0; i < 10; i++){
//     num.push("");
// }
// for ( let lastNumber = num.length-1 ; lastNumber >= 0 ; lastNumber--){
//     console.log(`${lastNumber}`);
// }

// Activity 4

// let film = ["Gone in 60 Seconds", "Despicable Me", "Elf", "The Italian Job"];

// for ( let i = 0 ; i < film.length ; i++){
//     console.log(`${film[i]}`);
// }
// if (film[2]==="Despicable Me") {
//     console.log(`Hooray, its ${film[2]}`);
// }
// else {
//     console.log(`Boo, we wanted ${film[2]}`);
// }

// Activity 5

// let numArray = [];

// while (numArray.length < 6){
//     numArray.push(Math.ceil(Math.random()*29));
// }
// for (let i = 0 ; i < 5 ; i++){
//     if (numArray[i] % 7 == 0){
//         console.log(`${numArray[i]} is divisible by 7`);
//     }
//     else {
//         console.log(`${numArray[i]} is not divisible by 7`);
//     }
// }

// Noemi's version sans array

// for (  i = 1; i <= 6; i++ ){
//     let num = (Math.round(Math.random()*30));
//     if (num % 7 == 0)
//     console.log(`${num} is divisible by 7`);
//     else {
//         console.log(`${num} is not divisible by 7`);
//     }
// }

// Activity 6

// let bobsFollowers = ["Andrew", "Mandy", "Michael", "Katie"];
// let hannahsFollowers = ["Peter", "Annette", "David", "Mandy", "Katie"];

// for ( let i = 0 ; i < bobsFollowers.length ; i++) {
//     for ( let j = 0 ; j < hannahsFollowers.length ; j++){
//         if (hannahsFollowers[j] === bobsFollowers[i]) {
//             console.log(`${hannahsFollowers[j]} is in both groups`);
//         }
//     }
// }

//  Grahams version
// let mufos = [];
// const bobsFollowers = [
//         "Ben",
//         "Charlie",
//         "Sarah",
//         "Alex"
//     ];

// const hannahsFollowers = [
//         "Sarah",
//         "Frank",
//         "Isa",
//         "Charlie"
//     ];

//     for (let i = 0; i < bobsFollowers.length; i++) {
//         for (let j = 0; j < hannahsFollowers.length; j++)
//         {
//             if (hannahsFollowers[i] === bobsFollowers[j]){

//                 mufos.push(hannahsFollowers[i]);
//             }
//         }
//     }

//     console.log(`The mutual followers are ${mufos}.`);

// Noemis version

//     let bobsFollowers = ["Annabelle", "Hélöise", "Esteban", "Joshua"]
// let hannahsFollowers = ["Joshua", "Samantha", "Annabelle", "Amélie"]
// for ( let i = 0; i < bobsFollowers.length ; i++ ) {
//     for (let l = 0; l < hannahsFollowers.length ; l++) {
//         if (bobsFollowers[i] == hannahsFollowers[l]) {
//             console.log(`${bobsFollowers[i]} is both a follower of Bob and Hanna`)
//         }
//     }
// }