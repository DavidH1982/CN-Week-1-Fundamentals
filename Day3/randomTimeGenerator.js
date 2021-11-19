let hour = Math.floor(Math.random()*24);
let minute = Math.floor(Math.random()*60);
let hourString = hour.toString();
let minuteString = minute.toString();

if (minuteString.length <= 1){
    minuteString = minuteString.padStart(2, '0')
}
if (hourString.length <= 1){
    hourString = hourString.padStart(2, '0')
}
console.log(`${hourString}:${minuteString}`);