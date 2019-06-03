function daysInYear(year) {
    try {
        if (Number.isInteger(year) === false) {
            throw  'exception';
        }
        return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0) ? 366 : 365;
    } catch (e) {
        console.log(e);
    }
}

console.log(daysInYear( 2019));
