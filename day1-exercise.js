//* Area of Rectangle
const length = 5
const width = 3
const areaRectangle = length * width
console.log(areaRectangle);

//* Perimeter of Rectangle
const lengthTwo = 5
const widthTwo = 3
const perimeterRectangle = 2 * (lengthTwo + widthTwo)
console.log(perimeterRectangle);

//* Diameter, Circumerence, and Area of Circle
const radius = 5;
const phi = 22/7

const diameter = radius * 2
const circumference = phi * diameter
const areaCircle = phi * (radius ** 2)

console.log(diameter);
console.log(circumference);
console.log(areaCircle);

//* Angle of Triangle
const angleA = 80;
const angleB = 65;

let angleC = 180 - ( angleA + angleB );
console.log(angleC);

//* Differences between two dates
let dateOne = new Date('2022-01-20')
let dateTwo = new Date('2022-01-22')
let oneDay = 24 * 3600 * 1000

let dateDiff = dateTwo - dateOne
dateDiff /= oneDay
console.log(dateDiff);
// console.log(dateDiff / (24 * 36000 * 1000));

//* Convert Day
const oneYear = 365;
const oneMonth = 30;

let days = 366

let yearCount = Math.floor(days / oneYear)
let remainingMonth = days % oneYear

let monthCount = Math.floor(remainingMonth / oneMonth)
let dayCount = (days % oneYear) % oneMonth

console.log(`${yearCount} Year ${monthCount} Month ${dayCount} Day(s)`);

//Math.ceil
//Math.round