//* NO.01 ======================================================================================
/**
 *  variabel arr = [12, 5, 23, 18, 4, 45, 32]
 * lowest --> 4
 * highest --> 45
 * average --> 19.8xx
 * 
 * WITHOUT and WITH SORT FUNCTION
 */

function arrayProcess(array) {
    let lowest = array[0];
    let highest = array[0];
    let temp = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < lowest) {
            lowest = array[i];
        }
        if (array[i] > highest) {
            highest = array[i];
        }

        temp += array[i];
    }

    const average = temp / array.length;
    return `The lowest: ${lowest}, 
            the highest: ${highest}, 
            and Average of Array: ${average}`

}

function arrayMethod(array) {
    let lowest = Math.min(...array);
    let highest = Math.min(...array);
    let average = highest / lowest;

    return { lowest , highest , average };
}

const arr = [12, 5, 23, 18, 4, 45, 32];
const newArr = arrayProcess(arr);
console.log(newArr);

const newArrMethod = arrayMethod(arr);
console.log(newArrMethod);

//* NO.02 ======================================================================================
/**
 * variable arr = ["apple", "banana", "cherry", "date"]
 * add comma between each fruits and print "and" in the last
 * result -->"apple, bananan, cherry, and date" 
 */

function arrFruits(fruit) {

   if (fruit.length === 0) {
    return "";

   } else if (fruit.length === 1) {
    return fruit[0];

   } else {
    let result = "";

    for (let i = 0; i < fruit.length - 1; i++) {
        result += fruit[i] + ", " 
    }

    result += "and " + fruit[fruit.length - 1];
    return result;
   }

}

const fruits = ["Apple", "Banana", "Cherry", "Date"];
arrFruits(fruits);
console.log(arrFruits(fruits))

//* NO.03 ======================================================================================
/**
 * variable = "Hello World" --> ["Hello", "World"]
 */

function greeting(greet) {
    let split = greet.split(" ");
    return split;
}

const hello = "Hello World";
const newHello = greeting(hello);
console.log(newHello);


//* NO.04 ======================================================================================
/**
 * Calculate each element in the same position
 * variable [1, 2, 3] + [3, 2, 1] --> [4, 4, 4]
 */

function summationArr(numb1, numb2) {
    const resultArray = [];
    for (let i = 0; i < numb1.length; i++) {
        const summation = numb1[i] + numb2[i];
        resultArray.push(summation);
    }

    return resultArray;
}

const arrNumb1 = [1, 2, 3];
const arrNumb2 = [3, 2, 1];
const resultArray = summationArr(arrNumb1, arrNumb2);
console.log(resultArray);


//* NO.05 ======================================================================================
/**
 * arr = [1, 2, 3, 4], newElement = 4 --> [1, 2, 3, 4]
 * arr = [1, 2, 3, 4], newElement = 7 --> [1, 2, 3, 4, 7]
 */

function addElement(add, n) {

    if (!add.includes(n)) {
        add.push(n); // Tambahkan n ke array jika belum ada
    }

    return add;
}

const element = [1, 2, 3, 4];
const add = 7;
const rElement = addElement(element, add)
console.log(rElement);

//* NO.06 ======================================================================================
/**
 * Rmove all odd numbers
 * [1, 2, 3, 4, 5, 6] --> [2, 4, 6]
 * 
 */
function removeOdd(numb) {
    const resultArray = [];

    for (let i = 0; i < numb.length; i++) {
        if (numb[i] % 2 !== 1 ) {
            resultArray.push(numb[i])
        }
    }

    console.log(resultArray)
    return resultArray
}

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumber = removeOdd(numbers);
console.log(evenNumber);


//* NO.07 ======================================================================================
/**
 * INPUT int = 5, 199, 54, 78, 10, 11, 88 --> 5, 199, 54, 78, 10;
 * MAX length of array = 5;
 */

function arrayCointainer(value, ...more) {
    const result = [];
    for (let i = 0; i < more.length && result.length < value; i++) {
        result.push(more[i])

    }

    return result
}

const maxSize = 5;
const size = arrayCointainer(maxSize, 5, 10, 24, 3, 6, 7, 8);
console.log(size);

//* NO.08 ======================================================================================

function combineArray(arrA, arrB) {
    return arrA.concat(arrB);
}

const arrA = [1, 2, 3];
const arrB = [4, 5, 6];
const combine = combineArray(arrA, arrB);
console.log(combine);

//* NO.09 ======================================================================================
/**
 * Find duplicate array
 * arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]
 */

function findDuplicate(find) {
    
    const result = [];
    for (let i = 0; i < find.length - 1; i++) {
        if (find[i + 1] == find[i]) {
            result.push(find[i]);
        }
    }

    return result;
}

const inputData = [1, 2, 2, 2, 3, 3, 4, 5, 5];
const findData = findDuplicate(inputData);
console.log(findData);

//* NO.10 ======================================================================================
/**
 * 
 */

function differenceArr(arrC, arrD) {
    let result = arrC.filter(x => !arrD.includes(x))
                     .concat(arrD.filter(x => !arrC.includes(x)))
    return result;
}

const arrC = [1, 2, 3, 4, 5];
const arrD = [3, 4, 5, 6, 7];
const diffArray = differenceArr(arrC, arrD);
console.log(diffArray);


//* NO.11 ======================================================================================
/**
 * Return 
 * arr = [1, [], undefined, {}, "string", {}, []];
 *  --> The function will return [1, undefined, “string”]
 * IF typeOf [], {} --> DELETE
 */

function primitiveVar(primiVar) {
    const result = [];
    // for (let i = 0; i < primiVar.length - 1; i++) {
    //     if (primiVar[i]) {
    //         // console.log(primiVar[i + 1]);
    //     } else {
    //         result.push(primiVar[i])
    //     }        
    // }
    let duplicate = primiVar.filter((item, index) => primiVar.indexOf(item) !== index);
    for (let i = 0; i < primiVar.length; i++) {
        if (duplicate) {
            primiVar.pop(primiVar[i])
        } else {
            result.push(primiVar[i])
        }
        console.log(primiVar);
    }

    console.log(result);
    return result;
    
}

const primitive = [1, [], undefined, {}, "string", {}, []]
let duplicate = primitive.filter((item, index) => primitive.indexOf(item) !== index);
console.log(duplicate);

const newPrimitive = primitiveVar(primitive)
console.log(newPrimitive);

// primitive.toString();
// console.log(primitive);

//* NO.12 ======================================================================================
/**
 * Second smallest number
 *  SORT: MAX to MIN
 *  Array length - 2;
 */

function secondSmallest(second) {
    const result = [];
    const array = second.sort(function(a, b) {
        return b - a;
    })

    console.log(array);
    for (let i = 0; i < array.length; i++) {
        if (array[i] == array[array.length - 2]) {
                result.push(array[i]);
        }
    }

    return result.toString();
}

const smallArray = [5, 3, 1, 7, 2, 6];
const secondArray = secondSmallest(smallArray);
console.log(secondArray);

//* NO.13 ======================================================================================
/**
 * mixedArray = ["3", 1, "string", null, false, undefined, 2]
 * CHECK typeOf number
 */

function getNumber(number) {
    const result = [];
    for (let i = 0; i < number.length; i++) {
        if (typeof number[i] === 'number') {
            result.push(Number(number[i]));
        }
    }

    console.log(result);
    const sum = result.reduce((total, current) => total + current, 0);
    return sum;
}

const mixArray = ["3", 1, "string", null, false, undefined, 2];
const numbArr = getNumber(mixArray);
console.log(numbArr);


//* NO.14 ======================================================================================
/**
 * arr = [10, 20, 40, 10, 50, 30, 10, 60, 10]
 */

function sumDuplicate(duplicate) {
    // const result = [];
    // for (let i = 0; i < duplicate.length; i++) {
    //     if (duplicate[i] === duplicate[i + 1])
            
    // }

    // console.log(result);
    // return result
}

const arrDuplicate = [10, 20, 40, 10, 50, 30, 10, 60, 10];
const sumArray = sumDuplicate(arrDuplicate);



//* NO.15 ======================================================================================
/**
 * Game Rock, Papaer, Scissor
 * Use Function retrun Win or Lose randomly
 * 
 * Ex. INPUT: Rock
 *     OUTPUT --> Win
 * 
 * [0, 1, 2] 
 * ["ROCK", "SCISSOR", "PAPER"]
 *  
 * IF ROCK > SCISSOR
 * ELSE IF SCISSOR > PAPER
 * ELSE PAPER > ROCK
 * 
 * 
 */
 
function gameSuit(playerChoice) {
    const choices = ["batu", "gunting", "kertas"];
    const compChoice = choices[Math.floor(Math.random() * 2.9)]

    
}

console.log(gameSuit("gunting"))