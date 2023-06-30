let user = { name: "John", years: 30 };

// your code to the left side:
// ... = user
let { name, years: age, isAdmin = false } = user;

console.log(name); // John
console.log(age); // 30
console.log(isAdmin); // false
