let arr = [1, 2, 3];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        if (i === 1) console.log("ada 1");

        let j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];

        // console.log([array[i], array[j]]);
    }
}

// counts of appearances for all possible permutations
let count = {
    123: 0,
    132: 0,
    213: 0,
    231: 0,
    321: 0,
    312: 0,
};

for (let i = 0; i < 50; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join("")]++;
}

// show counts of all possible permutations
for (let key in count) {
    console.log(`${key}: ${count[key]}`);
}
