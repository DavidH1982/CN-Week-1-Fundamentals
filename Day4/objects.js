// Object Example

// let offer = "none";
// let time = 1600;

// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [
//         "Cappuccino",
//         "Latte",
//         "Filter Coffee",
//         "Tea",
//         "Hot Chocolate"
//     ],
//     breakfastOffer: "Free criossant with coffee",
//     lunchOffer: "Free drink with surprisingly priced sandwich",
//     noOffer: "Sorry no offer"
// };
//  if (time < 1100) {
//      offer = cafe.breakfastOffer;
//      console.log(offer);
//  } else
//  if (time < 1500) {
//      offer = cafe.lunchOffer;
//      console.log(offer);
//  } else {
//      offer = cafe.noOffer
//      console.log(offer);
//  }

// const person = {
//     name: "David",
//     age: 39
// };

// person.favSongs = ["Song1", "Song2", "Song3", "Song4"];

// console.log(person.favSongs);
// console.log(person);
// console.log(person.name)

// let weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
// let weekend = ["Saturday", "Sunday"]
// let day = Monday;


// const alarm = {
//     weekendAlarm : "No alarm needed",
//     weekdayAlarm : "Get up at 7."
// };



// if (day == weekday[""]) {
//     console.log(alarm.weekdayAlarm);
// } else {
//     console.log(alarm.weekendAlarm);
// }

// IF A FUNCTION IS WITHIN AN OBJECT IT IS CALLED A METHOD!!

// let offer = "none";
// let time = 1200;

// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: ["Cappuccino", "Latte", "Filter Coffee", "Tea", "Hot Chocolate"],
//     breakfastOffer: "Free croissant with coffee",
//     lunchOffer: "Free drink with surprisingly priced coffee",
//     noOffer: "Sorry no offer",
//         openCafe(){
//             if(this.hasSpecialOffers){
//                 return "Time for a special offer";
//             }
//         },
//     closeCafe(){
//         return "We are closed, come back tomorrow!";
//     }
// };
// console.log(cafe.openCafe());

// Activity 1
// const person = {
//     name: "David",
//     age: 39,
//     sayHi(){
//         return `Hello, my name is ${person.name}.`;
//     }
// };
// console.log(person.sayHi());

// Activity 2
// const pet = {
//     name: "Roy",
//     typeOfPet: "Cat",
//     age: 8,
//     color: "TortoiseShell",
//     eating(){
//         return `${pet.name} is eating.`;
//     },
//     drinking(){
//         return `${pet.name} is drinking`;
//     }
// }
// console.log(pet.eating());
// console.log(pet.drinking());

// Activity 3

const coffeeShop = {
    branch: "Lytham",
    drinks: ["Cappuccino", "Latte", "Flat White"],
    drinkPrices: [3.50, 3.50, 3.25],
    food: ["Cake", "Crisps", "Sandwich"],
    foodPrices: [2.50, 1.15, 2.75],
        drinksOrdered(){
            return `Your drinks order is ${coffeeShop.drinks[0]} x2, ${coffeeShop.drinks[2]}. Drinks total is £${((coffeeShop.drinkPrices[0]*2)+coffeeShop.drinkPrices[2])}`;
        },
        foodOrdered(){
            return `Your food order is ${coffeeShop.food[2]} x3, ${coffeeShop.food[1]}. Food total is £${(coffeeShop.foodPrices[2]*3)+coffeeShop.foodPrices[1]}`;
        },
}

let totalPrice = coffeeShop.foodPrices[2]*3+coffeeShop.foodPrices[1]+(coffeeShop.drinkPrices[0]*2)+coffeeShop.drinkPrices[2]

console.log(coffeeShop.drinksOrdered());
console.log(coffeeShop.foodOrdered());
console.log(`Your total bill is £${totalPrice}`);