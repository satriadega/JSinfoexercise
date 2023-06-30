let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

const mapNames = (array) => array.map((user) => user.name);

let names = mapNames(users);

console.log(names); // John, Pete, Mary
