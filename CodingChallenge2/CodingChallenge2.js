const CURRENT_YEAR = 2018
const FULL_AGE = 18

function printFullAge(years) {
    var ages = new Array()
    for (var i = 0; i < years.length; i++)
        ages[i] = (CURRENT_YEAR - years[i]) >= FULL_AGE
    return ages
}

var full_1 = printFullAge([1998, 1999, 2000, 2001, 2002, 2003])
var full_2 = printFullAge([1986, 1990, 1994, 1998, 2002, 2006, 2010])
console.log(full_1)
console.log(full_2)