let arr = [5, 3, 8, 1];

const filterRange = (array, start, end) => {
    return array.filter((item) => item >= start && item <= end);
};

let filtered = filterRange(arr, 1, 4);

console.log(filtered); // 3,1 (matching values)
console.log(arr); // 5,3,8,1 (not modified)
