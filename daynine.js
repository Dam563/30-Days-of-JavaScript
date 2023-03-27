
// Higher order functions are functions which take other function as a parameter or return a function as a value
// A callback is a function which can be passed as parameter to other function

// a callback function, the name of the function could be any name
const callback = (n) => {
    return n * 2
  }
  ​
  // function that takes other function as a callback
  function cube(callback, n) {
    return callback(n) * n
  }
  ​
  console.log(cube(callback, 3))

//   Setting a time using setInterval

// syntax
function callback() {
    // code goes here
  }
  setInterval(callback, duration)


  function sayHello() {
    console.log('Hello')
  }
  setInterval(sayHello, 1000) // it prints hello in every second, 1000ms is 1s

//   Setting a time using setTimeout
function sayHello() {
    console.log('Hello')
  }
  setTimeout(sayHello, 2000) // it prints hello after it waits for 2 seconds.

//   Functional Programming
// forEach: Iterate an array elements. We use forEach only with arrays.
//  It takes a callback function with elements, index parameter and array itself. The index and the array optional.

let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num))
console.log(sum)

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach((element) => console.log(element.toUpperCase()))

// map: Iterate an array elements and modify the array elements. It takes a callback function with elements, index , 
// array parameter and return a new array.
//Example
const numbersTwo = [1, 2, 3, 4, 5]
const numbersSquare = numbersTwo.map((num) => num * num)

console.log(numbersSquare)

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesToUpperCase = names.map((name) => name.toUpperCase())
console.log(namesToUpperCase)

// Filter: Filter out items which full fill filtering conditions and return a new array.
const myCountries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]

  //Filter countries containing land
const countriesContainingLand = myCountries.filter((country) =>
country.includes('land')
)
console.log(countriesContainingLand)

const countriesEndsByia = countries.filter((country) => country.endsWith('ia'))
console.log(countriesEndsByia)

// reduce: Reduce takes a callback function. The call back function takes accumulator, current, and optional
//  initial value as a parameter and returns a single value. 
// Example
const numbersThree = [1, 2, 3, 4, 5]
const mySum = numbersThree.reduce((acc, cur) => acc + cur, 0)

console.log(sum)

// every: Check if all the elements are similar in one aspect. It returns boolean
const namesOne = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr = namesOne.every((name) => typeof name === 'string') // Are all strings?

console.log(areAllStr)

//  find: Return the first element which satisfies the condition
const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)

console.log(age)

const namesTwo = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const result = namesTwo.find((name) => name.length > 7)
console.log(result)

// findIndex: Return the position of the first element which satisfies the condition
const namesThree = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const agesTwo = [24, 22, 25, 32, 35, 18]

const myResult = namesThree.findIndex((name) => name.length > 7)
console.log(myResult) // 0

const myAge = agesTwo.findIndex((age) => age < 20)
console.log(myAge) // 5

// some: Check if some of the elements are similar in one aspect. It returns boolean
const namesFour = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const bools = [true, true, true, true]

const areSomeTrue = bools.some((b) =>  b === true)

console.log(areSomeTrue) //true

const areAllStri = namesFour.some((name) => typeof name === 'number') // Are all strings ?
console.log(areAllStri) // false

// sort: The sort methods arranges the array elements either ascending or descending order.
// Sort method modify the original array. It is recommended to copy the original data before you start using sort method.
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
//Now the original products array  is also sorted

// sorting numeric values
console.log(numbers) // [3.14, 9.81, 37, 100]

numbers.sort(function (a, b) {
  return b - a
})
console.log(numbers) //[100, 37, 9.81, 3.14]

// sorting object arrays
// Whenever we sort objects in an array, we use the object key to compare. Let us see the example below.

objArr.sort(function (a, b) {
    if (a.key < b.key) return -1
    if (a.key > b.key) return 1
    return 0
  })
  
  // or
  
  objArr.sort(function (a, b) {
    if (a['key'] < b['key']) return -1
    if (a['key'] > b['key']) return 1
    return 0
  })
  
  const users = [
    { name: 'Asabeneh', age: 150 },
    { name: 'Brook', age: 50 },
    { name: 'Eyob', age: 100 },
    { name: 'Elias', age: 22 },
  ]
  users.sort((a, b) => {
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
  })
  console.log(users) // sorted ascending
  // [{…}, {…}, {…}, {…}]