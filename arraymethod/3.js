let arr = [5, 3, 8, 1];

const filterRangeInPlace = (arr, start, end) => {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < start || arr[i] > end) {
            arr.splice(i, 1);
        }
        console.log(i + " arrLength : " + arr.length);
    }
};

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

console.log(arr); // [3, 1]
