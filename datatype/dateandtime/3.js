let date = new Date(2012, 0, 3); // 3 Jan 2012

function getLocalDay(date) {
    let day = date.getDay();

    if (day == 0) {
        // weekday 0 (sunday) is 7 in european
        day = 7;
    }

    return day;
}

console.log(getLocalDay(date));