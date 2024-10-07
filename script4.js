let numbers = [1, 2, 3, 4, 5];
let result = numbers
    .filter(num => num % 2 === 0)   // Filter even numbers
    .map(num => num * num)           // Square the filtered numbers
    .reduce((acc, num) => acc + num, 0);  // Sum the squared numbers

console.log(result);  // Output: 20
