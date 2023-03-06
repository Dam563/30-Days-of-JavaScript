

let toDo = prompt('What are your plans for today?');
const deleteMe = confirm('Are you sure you want to delete this?')

// First create a time object (line 7-8) before you can start accessing any date and time information
let now = new Date()
console.log(now);

console.log(now.getFullYear())