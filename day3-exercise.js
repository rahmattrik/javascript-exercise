//* N0.1 Multiplication Table ===========================================================
/**
 *  INPUT number = 9
 *  PRINT 9 x 1
 *        9 x 2 
 *        ...
 *        9 x 10
 * 
 *  let number;
 *  for (let i = 1; i <= 10; i++) {
 *      console.log(number + " x " + i)
 *      console.log("\n")
 *  }
 * 
 */

let number = 9;
for (let i = 1; i <= 10; i++) {
    // console.log(number + " x " + i);
    console.log(`${number} x ${i} = ${number * i}`);
}

//* NO.2 Palindrome =======================================================================
/**
 *  INPUT STRING;
 *  IF (STRING)
 *      madam <- reverse -> madam
 *      PRINT Palidrom
 *  ELSE {
 *      PRINT Not Palidrom
 *  }
 *  
 */

let words = "madam",
    apart = words.toLowerCase()
                   .split(""),
    palindrome = words.toLowerCase()
                      .split("")
                      .reverse();

console.log(apart === palindrome ? `${words} is Palindrome` : `${words} is not Palindrome`);

//* ======================================================================================

let rev = ""
for (let i = words.length - 1; i >= 0; i--) {
    rev += words[i];
    console.log(words[i]);
}
console.log(rev);

//* =======================================================================================

/**
 * apart[i] = ['m','a','d','a','m']
 * iterasi 1: apart[0] === apart[5 - 1 - 0] = apart[4]
 * iterasi 2: apart[1] === apart[5 - 1 - 1] = apart[3]
 * iterasi 3: apart[2] === apart[5 - 1 - 2] = apart[2]
 * iterasi 4: apart[3] === apart[5 - 1 - 3] = apart[1]
 * iterasi 5: apart[4] === apart[5 - 1 - 4] = apart[0]
 */
const isPalindrome = true; //Boolean
for (let i = 0; i < apart.length; i++) {
    if (apart[i] !== apart[apart.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}

if (isPalindrome) {
    console.log(`${words} is Palindrome`);
} else {
    console.log(`${words} is not Palindrome`);
}

//

//* NO.3 Convert Centimeter to Kilometer ===================================================
/**
 *  let centimeter = 100000
 *  let kilometer = centimeter / 100000
 *      PRINT kilometer
 */

let centimeter = 100000;
let kilometer = centimeter * 0.00001
console.log(`${centimeter} cm = ${kilometer} km`);

//* NO.4 Format Number Currency ============================================================
/**
 * INPUT 1000
 *  PRINT Rp. 1.000,00
 */

// const rupiah = (number) => {
//     return Intl.NumberFormat('id-ID', {
//         style: 'currency',
//         currency: 'IDR'
//     }).format(number);
// }

// console.log(rupiah(200000));

/**
 * * Intl.NumberFormat
 * Objek memungkinkan pemformatan nomor yang peka terhadap bahasa
 * / Membuat objek NumberFormat baru.
 * 
 * * 'id-ID'
 * Ini adalah kode bahasa dan wilayah untuk Indonesia. 
 * Ini menunjukkan bahwa format angka yang akan digunakan adalah 
 * sesuai dengan konvensi lokal di Indonesia.
 * 
 * * style: 'currency'
 * Ini menunjukkan bahwa kita ingin memformat angka sebagai mata uang
 * 
 * * currency: 'IDR'
 * Ini menunjukkan bahwa kita ingin menggunakan mata uang Rupiah
 * 
 * metode format() dari objek Intl.NumberFormat 
 * untuk memformat angka yang diberikan
 * 
 */
let amount = 2000000
let rupiah = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
})

console.log(rupiah.format(amount));

//* NO.5 Search string ===================================================================

/**
 *  INPUT "Hello World"
 *   INPUT searchString "ell"
 *  String.replace(searchString, "")
 */

let inputString = "Hello world";
const result = inputString.replace("ell", "");
console.log(result);

//* ======================================================================================

let inputStringArray = []
for (let i = 0; i < inputString.length; i++) {
    inputStringArray[i] = inputString[i]
}

let splitString = inputString.split("");
// console.log(splitString);
let startIndex = 1,
    deleteCount = 3;

console.log(deleteCount);
let newArray = [];
for (let i = 0; i < splitString.length; i++) {
    if (i < startIndex || i >= startIndex + deleteCount) {
        newArray.push(splitString[i]);
        // console.log(newArray);
    }
}

console.log(newArray.join(""));

// let newArray =[]
//  for (let i = 0; i < inputString.length; i++) {
//     if (i < startIndex || i >= startIndex + deleteCount) {
//         newArray.push(inputString[i])
//     }
//  }

//  console.log(newArray.join(""));

//* =============================================================

const search = "ell";
const replaceInputString = "";
const remove = inputString.replace(search, replaceInputString)
console.log(remove);


//* NO. 6 Capitalize The First Latter =====================================================

/**
 * hello world --> Hello World
 * capitalize[i][0] : mengambil karakter pertama
 */

let sentence = "hello world",
    capitalize = sentence.split(" ");
// console.log(capitalize);


for (let i = 0; i < capitalize.length; i++) {
    capitalize[i] = capitalize[i][0].toUpperCase() + capitalize[i].slice(1);
    // console.log(capitalize[i][0]);
    // console.log(capitalize[i].substr(1));
}

console.log(capitalize.join(" "));

/**
 * .substr(1)
 * Digunakan untuk memotong string setelah karakter pertama
 * Karena index dihitung mulai dari 0,
 * Berarti pada kasus diatas memotong mulai dari index pertama
 * 
 */

//* NO.7 Revese Letter

let reverse = "hello",
    reverseLetter = reverse.split("").reverse(),
    resultReverse = reverseLetter.join("");

console.log(resultReverse);

//* ====================================================
// console.log(reverse[5]);
// console.log(reverse[4]);

let message = "";
for (let i = reverse.length -1; i >= 0; i--){
    message += reverse[i]
} 

console.log(message);

//* NO. 8 Swap
let swapCase = "The QuiCk BrOwN Fox",
    change = swapCase.split("");
    // swapLen = swapCase.length;

for (let i = 0; i < change.length; i++) {
    if (change[i] === change[i].toUpperCase()) {
        console.log(change[i]);
        change[i] = change[i].toLowerCase();
    } else if(change[i] === change[i].toLowerCase()) {
        console.log(change[i]);
        change[i] = change[i].toUpperCase();
    } else {
        change[i] = change[i]
        // console.log(change[i]);
    }
}

console.log(change.join(""));

//* ==================================================================

let swappedString = "";
for (let i = 0; i < swapCase.length; i++) {
    const char = swapCase[i];
    if (char === swapCase[i].toUpperCase) {
        swappedString += char.toLowerCase;
    } else {
        swappedString += char.toUpperCase;
    }
}

console.log(swappedString);

//* NO.9 Num1, Num2

let num1 = 42,
    num2 = 27;

console.log(num1 > num2 ? num1 : num2);

//* NO. 10 Num1, Num2, Num3
let numberOne = 42,
    numberTwo = 27,
    numberThree = 18,
    numbers = [numberOne, numberTwo, numberThree];

numbers.sort()
console.log(numbers);

//* ================================================================================

let smallest = Math.min(numberOne, numberTwo, numberThree)
let biggest = Math.max(numberOne, numberTwo, numberThree)
let middle = numberOne + numberTwo + numberThree - smallest - biggest
console.log(`${smallest}, ${middle}, ${biggest}`);

//* ================================================================================
/**
 * Iterasi 1:
| i | j | numbers                 | Pertukaran  |
|---|---|-------------------------|-------------|
| 0 | 0 | [42, 27, 18]            | Tidak       |
| 0 | 1 | [27, 42, 18]            | Ya          |
| 0 | 2 | [27, 18, 42]            | Ya          |

Iterasi 2:
| i | j | numbers                 | Pertukaran  |
|---|---|-------------------------|-------------|
| 1 | 0 | [27, 18, 42]            | Tidak       |
| 1 | 1 | [18, 27, 42]            | Ya          |

Iterasi 3:
| i | j | numbers                 | Pertukaran  |
|---|---|-------------------------|-------------|
| 2 | 0 | [18, 27, 42]            | Tidak       |

 */

for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - 1 - i; j++) {
        if (numbers[j] > numbers[j + 1]) {
            // Tukar nilai jika elemen saat ini lebih besar dari elemen berikutnya
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}

console.log(numbers);

//* NO.11 Count amount of String 
// Hello --> 1
let countWord = "Hello";
//     splitWord = countWord.split(" ");

// console.log(splitWord.length);

let type;
if (typeof countWord === "string") {
   type = 1; 
} else if (typeof countWord === "number") {
    type = 2;
} else {
    type = 3
}

console.log(type);

//* NO.12 
const inputLetter = "An apple a day keeps the doctor away";
let replaceLetter = inputLetter.toLowerCase().split("");
// let len = replaceLetter.length;

for (let i = 0; i < replaceLetter.length; i++) {
    if (replaceLetter[i] === "a") {
        replaceLetter[i] = "*"
    }
}

const resultString = replaceLetter.join("")
console.log(resultString);

//* ==================================================================

const replaceInputLetter = "a";
const modifiedString = "";

for (let i = 0; i < inputLetter.length; i++) {
    if (inputLetter[i] === replaceInputLetter) {
        modifiedString += "*";
    } else {
        modifiedString += inputLetter[i];
    }
}

console.log(modifiedString);
