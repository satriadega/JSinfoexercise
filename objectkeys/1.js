let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
};

function sumSalaries(array) {
    let sum = 0;
    for (let value of Object.values(array)) {
        sum += value;
    }
    return sum;
}

console.log(sumSalaries(salaries)); // 650
