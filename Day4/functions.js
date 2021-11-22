// SYNTAX

// function "name" ("parameters") {
    // "Javascripte statement that defines the function";
// }

// function greet(name, lastName) {
//     console.log("Hello " + name + " " + lastName);
// }

// greet ("John", "Smith");

// const square = function(number) {return number * number};
// let x = square(4);
// console.log(x);

// const pressGrindBeans = () => {
//     console.log("Grinding for 20 seconds");
// }
// pressGrindBeans();

// let coffeeIsGrinding = false;

// const pressGrindBeans = () => {
//     if (coffeeIsGrinding) {
//         console.log("Stopping the grind");
//         coffeeIsGrinding = false;
//     } else {
//         console.log("Grinding is about to begin");
//         coffeeIsGrinding = true;
//     }
// }

// pressGrindBeans();
// pressGrindBeans();

// PARAMETERS give our functions flexibility  act based upon the data input
// PARAMETERS WHEN DEFINING FUNCTIONS, ARGUMENTS WHEN CALLING FUNCTIONS
// const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdrawing ${amount} from account ${accnum}`);
// }

// cashWithdrawal(300, 50449921);
// cashWithdrawal(30, 50449921);
// cashWithdrawal(200, 50449921);

// CAN ALSO USE GLOBAL VARIABLES WITHIN FUNCTIONS PARAMETERS AND ARGUMENTS

// const addUp = (num1, num2) => {
//     return num1 + num2;
// }
// addUp(7,3);
// // will not be displayed - just returned within the code
// console.log(addUp(2,5));
// // this will be displayed


// Activity 1

// console.log("Activity 1");

// const factorial = (n) => {
//     if ((n === 0) || (n === 1)) {
//         return 1;
//     } else {
//         return (n * factorial(n-1));
//     }
// }

// console.log(factorial(33));

// Activity 2

console.log("Activity 2");

let orderCount = 0

const takeOrder = (topping1, topping2) => {
    console.log(`Pizza with ${topping1} and ${topping2}`);
    orderCount++;
}

takeOrder("Pepperoni", "Mushroom");
takeOrder("Chicken", "Sweetcorn");
takeOrder("Ham", "Pineapple");
console.log(`You have ordered ${orderCount} pizzas`);

// // Activity 3

// let pinNumber = 1234;
// let accBalance = 200;

// const cashWithdrawal = (pin, amount) => {
//     if ((pin === pinNumber) && (amount <= accBalance)) {
//         accBalance = accBalance - amount;
//         console.log(`Here is your money. Your remaining balance is £${accBalance}. You are getting poorer by the minute!`)
//     } else 
//     if (pin !== pinNumber) {
//         console.log("Your PIN was incorrect. Can you not remember 4 numbers?");
//     } else
//     if (amount > accBalance) {
//         console.log("You have insufficient funds in your account...Loser!");
//     }
// }
// cashWithdrawal(1234, 100);
// cashWithdrawal(1234, 50);
// cashWithdrawal(1235, 50);
// cashWithdrawal(1234, 75);

// //Peter Marton answer

// const pinCode = 12345678;
// let accountBalance = 1000;
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

// function cashMachine() {
//     readline.question("Please enter your pin number: ", pin => {
//         if (pin == pinCode){
//             console.log("Your pin is correct.");
//             readline.question("Enter the amount you wish to withdraw: ", balance => {
                
//                 if (balance <= accountBalance){
//                     console.log("Your withdrawal is being processed.");
//                     console.log(`Your new balance is ${accountBalance - balance}.`);
//                     readline.close();
//                 } else {
//                     console.log("Your balance is insufficient, we couldn't complete your transaction.");
//                     tryAgainWithdrawal();
//                 }
//             });
//         } else {
//             console.log("Your pin is incorrect!");
//             console.log("Please try again!");
//             cashMachine();
//         }
//     });
// }

// function tryAgainWithdrawal(){
//     readline.question("Please enter another amount that you wish to withdraw: ", balance => {
        
//         if (balance <= accountBalance){
//             console.log("Your withdrawal is being processed.");
//             console.log(`Your new balance is ${accountBalance - balance}.`);
//             readline.close();
//         } else {
//             console.log("Your balance is insufficinet, we couldn't complete your transaction.");
//             tryAgainWithdrawal();
//         }
//     });
// }

// cashMachine();