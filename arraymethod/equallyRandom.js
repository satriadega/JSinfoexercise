let count = {
    0: 0,
    1: 0,
    2: 0,
};

for (let i = 0; i < 10000; i++) {
    let test = Math.floor(Math.random() * (2 + 1));
    count[test]++;
}

for (let key in count) {
    console.log(`${key}: ${count[key]}`);
}

let test = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };

for (let i = 0; i < 100000; i++) {
    let number = Math.floor(Math.random() * 10);
    test[number] += 1;
}

console.log(test);

// for (let key in test) {
//     console.log(`${key}: ${test[key]}`);
// }
