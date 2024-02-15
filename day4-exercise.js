//* NO.1 =====================================================================================
/**
 * 01
 * 02 03
 * 04 05 06
 * 07 08 09 10
 * height --> triangle height
 */

let heightTriangle = 4;
let num = 1;


for (let i = 0; i < heightTriangle; i++) {
    let line = "";

    for (let j = 0; j <= i; j++) {
        if (num < 10) {
            line += "0" + num + " ";
        } else {
            line += num + " ";
        }
        num++;
    }
    console.log(line);
}

//* ==========================================================================================

// function triangle(height) {
//     for (let i = 0; i <= height; i++) {
//         let row = "";

//         for (let j = 1; j<= i; j++) {
//             row += j + " ";
//         }
//         console.log(row);
//     }
// }

// triangle(5);

//* ==========================================================================================

function triangle(height) {
    let currentNumb = 1;
    for (let i = 0; i <= height; i++) {
        let row = "";

        for (let j = 1; j <= i; j++) {
            row += (currentNumb < 10 ? "0" : "") + currentNumb + " ";
        }
        console.log(row);
    }
}

triangle(5);

//* NO.2 =====================================================================================
/**
 * n        = total looping
 * n(6)     = 1, 2, Fizz, 4, Buzz, Fizz
 * n(15)    = 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz
 * 
 * n % 3 = "Fizz"
 * n % 5 = "Buzz"
 * n % 3 && n % 5 = "FizzBuzz"
 *   
 */

let n = 15;
let array = []

for (let i = 1; i <= n; i++) {
    array.push(i)
}

for (let j = 0; j < array.length; j++) {
    // console.log(j);
    if (array[j] % 3 === 0 && array[j] % 5 === 0) {
        array[j] = "FizzBuzz";
    } else if (array[j] % 5 === 0) {
        array[j] = "Buzz"
    } else if (array[j] % 3 === 0) {
        array[j] = "Fizz"
    } else {
        array[j] = array[j]
    }
}

console.log(array);

//* ==========================================================================================

function fizzBuzz (n) {
    let message = "";

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            message += "FizzBuzz" + "\n";
        } else if (i % 5 === 0) {
            message += "Buzz" + "\n";
        } else if (i % 3 === 0) {
            message += "Fizz" + "\n"
        } else {
            message += i + "\n";
        }
    }

    console.log(message);
}

fizzBuzz(15);

//* NO.3 =====================================================================================
/**
 * BWI: weigh(kg) / height(meter^2)
 * Parameter: weigh & heigh
 * 
 * return values
 * 
 */

function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    
    if (bmi < 18.5) {
        return "less weight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "ideal";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        return "overweight";
    } else if (bmi >= 30.0 && bmi <= 39.9) {
        return "very overweight";
    } else {
        return "obesity";
    }
}

const weight = 70; // in kilograms
const height = 1.75; // in meters

const bmiCategory = calculateBMI(weight, height);
console.log("BMI Category:", bmiCategory);



//* NO.4 =====================================================================================
/**
 * Create function to remove all odd numbers
 * [1,2,3,4,5,6,7,8,9,10] --> [2,4,6,8,10]
 */

function removeOdd (number) {
    const result = [];

    for (let i = 0; i < number.length; i++) {
        if (number[i] % 2 === 0) {
            result.push(number[i])
        } 
    }
    
    return result;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNumbers = removeOdd(numbers)
console.log(newNumbers)

//* ==========================================================================================
//BUILD IN METHOD: FILTER

function removeOddNumbers(arr) {
    return arr.filter((item) => item % 2 === 0);
}

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(input);

//* NO.5 =====================================================================================
/**
 * Function to split a String and convert into an array
 * "Hello World" --> ["Hello", "World"] 
 */

function splitString(word) {
    return word.split(" ")
}

const words = "Hello World";
const arrayWords = splitString(words);
console.log(arrayWords);

//* ==========================================================================================
//WITHOUT BUILD IN METHOD

const splitString2 = function (input) {
    let word = [];
    let temp = "";

    for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
            word.push(temp);
            temp = "";
            continue; //Skip Looping
        }

        temp += input[i];
    }

    word.push(temp);
    return word;
}

console.log(splitString2("Welcome to JavaScript Environment"));





