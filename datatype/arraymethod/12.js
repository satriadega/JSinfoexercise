function unique(arr) {
    /* your code */
    let result = [];
    arr.forEach((i) => {
        if (!result.includes(i)) {
            result.push(i);
        }
    });
    return result;
}

let strings = [
    "Hare",
    "Krishna",
    "Hare",
    "Krishna",
    "Krishna",
    "Krishna",
    "Hare",
    "Hare",
    ":-O",
];

console.log(unique(strings)); // Hare, Krishna, :-O

console.log(strings.includes("Hare"));
