// Code your solutions in this file

function writeCards(names, occasion) {
    const messages= [];
    
    for (let i =0; i < names.length; i++) {
    const message = `Thank you, ${names[i]}, for the wonderful ${occasion} gift!`;
    messages.push(message);
}
return messages;
}
const names = ["Guadalupe", "Ollie", "Aki"];
const occastion = ["surprise"];
const messages = writeCards(names, occasion);
console.log(messages)

;

function countDown(number) {
let countDown = 11
while (countDown > 0) {
    countDown--
    console.log(countDown);
    
}
}
