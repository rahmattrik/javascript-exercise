//* Convert Temperature
const celciusDegree = 60;
const farenhaitDegree = (9/5) * celciusDegree + 32;
console.log(farenhaitDegree);

//* Check Odd or Even
const number = 1;
console.log(number % 2 === 1 ? "Bilangan ganjil" : "Bilangan genap");

// if (number % 2 === 1) {
//     console.log("Bilangan ganjil");
// } else {
//     console.log("Bilangan genap");
// }

//* Check Prime Number
let p = 2;
let isPrime = true;

if (p <= 1 ) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(p); i++) {
        // console.log(i);
        // console.log(Math.sqrt(p));
        if (p % i === 0) {
            console.log({p, i});
            isPrime = false; // Jika number habis dibagi oleh i, maka bukan bilangan prima
            return;
        }
    }
}

if (isPrime) {
    console.log(`${p} is Prime`);
} else {
    console.log(`${p} is not Prime`);
}

//* ==================================================
let numb = 7;
for (let i = 2; i < numb; i++) {
    if(numb % i == 0) {
        isPrime = false;
        break;
    }
}

console.log(isPrime);

//* Sum
let array = [1, 2, 3]
let sum = 0
for (let i = 0; i < array.length; i++) {
    sum += array[i] //sum = sum + array[i]
    console.log(sum)
}
console.log(sum);

//* ===================================================

const n = 5;
const r = (n * (n + 1)) /2
console.log(r);

//* ===================================================

let angka = 5;
let sumAngka = 0;
let message = ""

for(let i = 1; i <= angka; i++) {
    sumAngka += i;
    message += i + (i !== angka ? " + " : "")
}

console.log(sumAngka);
console.log(message + " = " + sumAngka);

//* ===================================================

 //* Faktorial
/**
 * n! = n.(n-1), n.(n-2), n.(n-3)
 * 
 */

let factorial = 6
    ,result = 1; //Temporary 

for (let i = 1; i <= factorial; i++) {
    result *= i //result = result * i
    console.log(result);
}

console.log(result);

//* ====================================================

const fac = 5;
let relt = 1
    , messageResult = "";

for (let i = 5; i >= 1; i--) {
    relt *= i;
    messageResult += i + (i === 1 ? "" : "! ")
}

console.log(messageResult + " = " + relt);


 //* Fibonaci
/**
 * Fibonacchi: 0 1 --> 1, 2, 3
 * Fn = F.(n - 1) + F.(n - 2)
 * F0 = 0 
 * F1 = 1
 * F2 = F1 + F0 = 1 + 0 = 1
 * F3 = F2 + F1 = 1 + 1 = 2
 * F4 = F3 + F2 = 2 + 1 = 3
 * 
 * 
 * Fn         = F.[n - 1]          + F.[n - 2]
 * fibonacci[2] = fibonacci[2 - 1] + fibonacci[2 - 2] = fibonacci[1] + fibonacci[0] = 1 + 0 = 1
 * fibonacci[3] = fibonacci[3 - 1] + fibonacci[3 - 2] = fibonacci[2] + fibonacci[1] = 1 + 1 = 2
 * fibonacci[4] = fibonacci[4 - 1] + fibonacci[4 - 2] = fibonacci[3] + fibonacci[2] = 2 + 1 = 3
 * 
 * 
 * Delarasi angka pertama deret Fibonacci
 * Inisialisasi mulai deret Fibonacci
 * 
 */

 const fibonacci = [0, 1];
 for (let i = fibonacci.length; i <= 15; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
 }
 console.log(fibonacci);

//* =======================================================

 let fibo = 15
 let a = 0;
 let b = 1;

 for (let i = 0; i < fibo; i++) {
    let next = a + b;
    a = b;
    b = next;
 }

 console.log(a);