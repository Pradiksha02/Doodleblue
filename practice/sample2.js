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

const employees = {
    name:"Neiran",
    salary: 30000,
};
console.log(employees.name)
console.log(employees["salary"])
employees.salary=40000
console.log(employees.salary)
employees.city="Chennai"
delete employees.city
console.log(employees)


const student = {
    name: "Priya",
    age: 20,
    address: {
        City: "Chennai",
        State: "Tamil Nadu"
    }
}
console.log(student.name)
console.log(student["age"])
console.log(student.address.City) 

const orginal={
    name:"Neiran",
    age:20,
}
const updated={
    ...orginal,
    age:21,
    city:"Chennai"
}
console.log(orginal)
console.log(updated)

//spread - combine operators
const personal={
  name:"John",
  age:30,
}
const professional={
  company:"ABC Corp",
  job:"Developer"
}
const combined={
  ...personal,
  ...professional
}
console.log(combined)

//in array
const first=[1,2,3]
const second=[4,5,6]

const combinedArray=[...first,...second]
console.log(combinedArray)

const copy =[...first]
console.log(copy)

//optional chaining
const user={
  name:"John",
  address:{
    city:"New York",
    state:"NY"
  }
}

//Nullish Coalescing Operator (??)
const username=null
const age=0
const cite=undefined
console.log(username ?? "Guest") //if username is null or undefined, it will return "Guest"
console.log(age ?? 18) //if age is null or undefined, it will return 18
console.log(cite ?? "Chennai") //if cite is null or undefined, it will return "Chennai"

/*|| vs ??*/

console.log(0||100);
console.log(0??100);

console.log(false||true)
console.log(false??true)

console.log(""??"Guest")
console.log(""||"Guest")

const a1= null
const b1= undefined
console.log(a1??18)


const username1=null;
const age1=0;
const city2=undefined;

console.log(username1??"Guest");
console.log(age1??18);
console.log(city2??"Chennai");