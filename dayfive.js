

const arr = ["Lagos", "Ogun", "Oyo", "Osun", "Ekiti", "Ondo"];
console.log(arr.length);

console.log(arr[0])

console.log(arr[2])

console.log(arr[5])
console.log(arr.sort())
arr.push("Abia")
console.log(arr)

if(arr.includes("Enugu")){
    console.log(arr);
}else{
    alert("Enugu is not contained in your array")
    arr.unshift("Enugu");
    console.log(arr);
}
arr.pop()
console.log(arr)

arr.shift()
console.log(arr)