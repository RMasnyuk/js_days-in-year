function daysInYear(year) {

        if (!Number.isInteger(year)) {
            throw  ('exception');
        }
        return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0) ? 366 : 365;
}

console.log(daysInYear( '2019'));
