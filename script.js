//your JS code here. If required.

// Create the student object
const student = {
    name: "John",
};

// Function to get all keys from the object
function getKeys(obj) {
    return Object.keys(obj); // Use Object.keys() to get the keys of the object
}

// Testing the function
console.log(getKeys(student)); // Output: ["name"]

// Additional test cases
const anotherStudent = {
    name: "Alice",
    age: 20,
    city: "New York"
};

console.log(getKeys(anotherStudent)); // Output: ["name", "age", "city"]
