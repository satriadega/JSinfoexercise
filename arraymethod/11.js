let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

// const getAverageAge = (arr) => {
//     let sum = 0;
//     arr.forEach((i) => {
//         sum += i.age;
//     });
//     return sum / arr.length;
// };

function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
