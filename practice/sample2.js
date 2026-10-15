const students = ["Priya", "Arun", "Divya", "Rahul", "Sneha"];

// 1. Print the first and last student names.
console.log(students[0]);
console.log(students[students.length - 1]);

// 2. Add "Karthik" to the end of the array.
students.push("Karthik");
console.log(students);

// 3. Remove the last student from the array.
students.pop();
console.log(students);

// 4. Slice: Create a new array containing "Arun", "Divya", and "Rahul".
const selectedStudents = students.slice(1, 4);
console.log(selectedStudents);

// 5. Splice: Remove "Divya" from the original array.
students.splice(students.indexOf("Divya"), 1);
console.log(students);

// 6. Includes: Check whether "Priya" exists in the array.
console.log(students.includes("Priya"));



const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1500 },
  { name: "Monitor", price: 12000 },
  { name: "Headphones", price: 2000 }
];

// 1. Filter products with price greater than 1000
const filteredProducts = products.filter(product => product.price > 1000);
console.log("Filtered products:", filteredProducts);

// 2. Get only the product names
const productNames = filteredProducts.map(product => product.name);
console.log("Product names:", productNames);

// 3. Calculate the total price of those products
const totalPrice = filteredProducts.reduce((total, product) => total + product.price, 0);
console.log("Total price:", totalPrice);



let strong = [40,10,5,20,30];
let res = strong.sort((a,b) => a-b);      // (a-b Ascending order ; b-a Descending order) (+ve-b -ve a)
console.log(res);

let number = [10, 20, 30, 40, ];
let res1 = number.reduce((total, num) => { return total + num}, );
console.log(res1);


let number2=[10, 20, 30, 40, 50];
let a = number2.slice(1, 3); // slice(startIndex, endIndex) - endIndex is not included
let b = number2.splice(2,1); // splice(startIndex, deleteCount) - removes elements from the original array
console.log( a);
console.log( b);

let number3=[10, 50, 15, 5];
let result = number3.every((n)=> {return n<30}); // every() - checks if all elements satisfy the condition
console.log(result);

//some()and every() - returns only boolean value [true or false] based on the condition provided in the callback function