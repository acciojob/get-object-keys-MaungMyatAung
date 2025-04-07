// Create the student object
const student = {
    name: "John",
};

// Function to get all keys from the object
function getKeys(obj) {
    return Object.keys(obj); // Use Object.keys() to get the keys of the object
}

// Testing the function with the student object
console.log(getKeys(student)); // Output: ["name"]

// Additional test cases
const anotherStudent = {
    name: "Alice",
    age: 20,
    city: "New York"
};

// Testing the function with another object
console.log(getKeys(anotherStudent)); // Output: ["name", "age", "city"]

// Additional test case with an empty object
const emptyObject = {};
console.log(getKeys(emptyObject)); // Output: []

// Additional test case with more properties
const complexObject = {
    name: "Bob",
    age: 30,
    city: "Los Angeles",
    isStudent: true
};

console.log(getKeys(complexObject)); // Output: ["name", "age", "city", "isStudent"]