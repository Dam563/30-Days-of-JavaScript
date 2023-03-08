// let drivingAge = 18;
// let age = prompt('Enter your age');
// console.log(age);

// let remainingAge = drivingAge - age;

// if(age >= drivingAge){
//     console.log('You are old enough to drive')
// }else{
//     console.log(`You are left with ${remainingAge} years to drive`)
// }

// let myAge = prompt('My age')
// let yourAge = prompt('How old are you?')
// let ageDiffOne = myAge - yourAge;
// let ageDiffTwo = yourAge - myAge;

// if(myAge > yourAge){
//     console.log(`I am ${ageDiffOne} years older than you`)
// }else if (yourAge > myAge){
//     console.log(`You are ${ageDiffTwo} years older than me`)
// }else{
//     console.log('We are age mates')
// }

let grade = prompt('Enter your grade');

if(grade <= 49){
    console.log('F')
}else if(grade > 49 && grade < 60){
    console.log('D')
}else if(grade > 59 && grade < 70){
    console.log('C')
}else if(grade > 69 && grade < 80){
    console.log('B')
}else{
    console.log('A')
}