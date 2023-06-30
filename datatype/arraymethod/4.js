let arr = [5, 2, 1, -10, 8];

const compareDecreasing = (a, b) => {
    if (a < b) return 1;
    if (a > b) return -1;
    if (a == b) return 0;
};

arr.sort(compareDecreasing);
// ... your code to sort it in decreasing order
// arr.sort((a, b) => b - a);

console.log(arr); // 8, 5, 2, 1, -10
