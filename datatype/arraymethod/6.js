function Calculator() {
    this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        test: "abc",
    };
    this.calculate = (str) => {
        const arr = str.split(" ");
        const a = +arr[0];
        const b = +arr[2];
        const op = arr[1];

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return this.methods[op](a, b);
    };
    this.addMethod = (name, func) => {
        this.methods[name] = func;
    };
}

let calc = new Calculator();
let powerCalc = new Calculator();

powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

console.log(calc.calculate("3 + 7")); // 10
console.log(powerCalc.calculate("2 ** 3"));
console.log(calc.methods["+"].toString());
