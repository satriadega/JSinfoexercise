let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

// let mapObject = (arr) => {
//     let result = arr.map((user) => {
//         user["fullName"] = `${user.name} ${user.surname}`;
//         return {
//             fullName: user.fullName,
//             id: user.id,
//         };
//     });
//     console.log(result);
//     return result;
// };

// let usersMapped = mapObject(users);

let usersMapped = users.map((user) => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id,
}));

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

console.log(usersMapped);
console.log(usersMapped[0].fullName); // John Smith
console.log(usersMapped[0].id); // 1
