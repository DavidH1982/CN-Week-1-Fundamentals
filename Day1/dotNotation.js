console.log("Hello World");
console.log("hello".toUpperCase());

console.log(Math.random());
console.log(Math.random()*10);

console.log(Math.floor(Math.random()*10));


// Attempting to create a grid using 
// arrays and loops

let upright = ['   |   |   '];
let dashes = ['-----------'];

function grid() {
    for (let i = 0; i < 3; i++)
    console.log(upright);
    console.log(dashes);
}

let n = 0;

while (n < 2){
    n++;
    grid();
}

// Didnt really work very well!!

function matrix_1() {
    for (var i = 0; i <3; i++)
        {console.log("   |   |   ");}
   console.log("------------");
    };
   matrix_1();
   matrix_1();
   function matrix_2() {
   for (var i = 0; i <3; i++)
   {console.log("   |   |   ");}
   };
   matrix_2();