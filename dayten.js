// Set is a collection of elements. Set can only contains unique elements.
// creating an empty set
const companies = new Set()
console.log(companies)
// We can add an element from a set using the add method.
// We can delete an element from a set using a delete method.
// We can check an element in a set using the has method.
// The clear method removes all the elements from a set.

// To find a union to two sets can be achieved using spread operator.
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)

// To find an intersection of two sets can be achieved using filter
let j = [1, 2, 3, 4, 5]
let k = [3, 4, 5, 6]

let J = new Set(j)
let K = new Set(k)

let x = a.filter((num) => K.has(num))
let X = new Set(x)

console.log(X)

// To find the difference between two sets can be achieved using filter

let d = [1, 2, 3, 4, 5]
let e = [3, 4, 5, 6]

let D = new Set(d)
let E = new Set(e)

let f = d.filter((num) => !E.has(num))
let F = new Set(f)

console.log(F);

