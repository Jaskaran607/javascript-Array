// 1️⃣ Simple Array of Numbers
const numbers = [10, 20, 30, 40, 50];
console.log("Numbers Array:", numbers);

// 2️⃣ Array of Strings
const fruits = ["Apple", "Banana", "Orange", "Mango"];
console.log("Fruits Array:", fruits);

// 3️⃣ Mixed Data Types Array
const mixed = [1, "Hello", true, 3.14, null];
console.log("Mixed Array:", mixed);

// 4️⃣ Multidimensional Array (Array inside Array)
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log("Matrix (2D Array):", matrix);
console.log("Element at (1,2):", matrix[1][2]);  // Output: 6

// 5️⃣ Array of Objects
const students = [
  { name: "John", age: 21 },
  { name: "Alice", age: 22 },
  { name: "David", age: 20 }
];
console.log("Students Array of Objects:", students);
console.log("Second Student's Name:", students[1].name);

// 6️⃣ Empty Array (then adding elements)
const emptyArray = [];
emptyArray.push("First Item");
emptyArray.push("Second Item");
console.log("Empty Array after adding elements:", emptyArray);



// 🔥 Array Useful Methods Examples

// length
console.log("Total fruits:", fruits.length);

// push (add at end)
fruits.push("Pineapple");
console.log("After push:", fruits);

// pop (remove from end)
fruits.pop();
console.log("After pop:", fruits);

// shift (remove from start)
fruits.shift();
console.log("After shift:", fruits);

// unshift (add at start)
fruits.unshift("Strawberry");
console.log("After unshift:", fruits);

// indexOf (find index)
console.log("Index of Mango:", fruits.indexOf("Mango"));

// includes (check existence)
console.log("Is Banana in fruits?", fruits.includes("Banana"));

// join (convert array to string)
console.log("Fruits as String:", fruits.join(" | "));

// slice (copy part of array)
const fewFruits = fruits.slice(1, 3);
console.log("Sliced Fruits:", fewFruits);

// splice (remove/replace elements)
fruits.splice(1, 1, "Kiwi");
console.log("After splice:", fruits);

// forEach (loop over array)
console.log("Loop using forEach:");
fruits.forEach((fruit, index) => {
  console.log(index + 1 + ": " + fruit);
});

// map (create new array)
const fruitLengths = fruits.map(fruit => fruit.length);
console.log("Lengths of each fruit name:", fruitLengths);

