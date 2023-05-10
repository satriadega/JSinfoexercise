const camelize = (string) => {
    let arr = string.split("-");
    arr = arr.map((item, index) => {
        if (index === 0) {
            return item;
        }
        return item.charAt(0).toUpperCase() + item.slice(1);
    });
    return arr.join("");
};

console.log(camelize("-webkit-transition"));
console.log(camelize("list-style-image") == "listStyleImage");
