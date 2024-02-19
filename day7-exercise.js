//* NO.1 ================================
function compareData(dataA, dataB) {
    // return dataA.a === dataB.a;
    // return JSON.stringify(dataA) === JSON.stringify(dataB);
    const key1 = Object.keys(dataA);
    const key2 = Object.keys(dataB);
    console.log(key1);

    if (key1.length !== key2.length) {
        return false;
    }

    for (const key of key1) {
        console.log(key);
        if (dataA[key] !== dataB[key]) {
            return false;
        }
    }

    return true;

}

const dataA = { a: 1 },
      dataB = { a: 3 };
const compare = compareData(dataA, dataB);
console.log(compare);

//* =====================================
function compareObject(objA, objB) {
    return objA.a === objB.a;
}

const objA = { a: "Hello" };
const objB = { a: 1};
const compareValue = compareObject(objA, objB);
console.log(compareValue);

//* =====================================
function compareVariable(varA, varB) {
    return varA.a === varB.a
}

const varA = { a: 1 };
const varB = { a: 1 };
const compareVar = compareVariable(varA, varB);
console.log(compareVar);

//* NO.2 ================================
function getIntersection(sectionA, sectionB) {
    const result = {};
    for (const key in sectionA) {
        if (sectionA.hasOwnProperty(key) && sectionB.hasOwnProperty(key) && 
            sectionA[key] === sectionB[key]) {
                result[key] = sectionA[key]
            }
    }

    return result;
}

const sectionA = { a: 4, b: 2 };
const sectionB = { a: 4, c: 3 };
const intersection = getIntersection(sectionA, sectionB);
console.log(intersection);

//* =====================================
const intersectionArrow = (obj1, obj2) => {
    const duplicate = {};

    for (let key in obj1) {
        // console.log(key);
        if (obj1[key] == obj2[key]) {
            duplicate[key] = obj1[key];
        }
    }

    return duplicate;
}

const arg1 = { a: 1, b: 2 };
const arg2 = { a: 1, c: 3 };
console.log(intersectionArrow(arg1, arg2));

//* NO.3 ================================
//Use method array.concat()

function mergeArray(arrayA, arrayB) {
    const arrA = [...arrayA];
    const arrB = [...arrayB];
    const merge = [];

    for (let i in arrA) {
        for (let j in arrB) {
            if (JSON.stringify(arrA[i].email) == JSON.stringify(arrB[j].email)) {
                delete arrB[j];
                merge.push(arrA.concat(arrB));
            }
        }
    }

    return merge;
}

const arrayA = [
    { name: "Student 1", email: "student1@mail.com" }, 
    { name: "Studnet 2", email: "student2@mail.com" }
];

const arrayB = [
    { name: "Student 1", email: "student1@mail.com" }, 
    { name: "Student 3", email: "student3@mai..com" }
];

const mergeResult = mergeArray(arrayA, arrayB);
console.log(mergeResult);
//Build in Method array.some;

//* =====================================
const removeDuplicate = (arr1, arr2) => {
    const combineArray = [...arr1, ...arr2];
    const temp = [];

    for (let i = 0; i < combineArray.length; i++) {
        const duplicateValues = temp.filter((value) => {
            return value.email === combineArray[i].email;
        });

        if (!duplicateValues.length) {
            temp.push(combineArray[i]);
        }
    }

    return temp;
};

const group1 = [
    { name: "Student 1", email: "student1@mail.com" }, 
    { name: "Studnet 2", email: "student2@mail.com" }
];

const group2 = [
    { name: "Student 1", email: "student1@mail.com" }, 
    { name: "Student 3", email: "student3@mai..com" }
];

console.log(removeDuplicate(group1, group2));

//* NO.4 ================================
function flipObject(data) {
    const flipped = data.map(obj => ({ 
        [obj.name]: 'name', 
        [obj.age]: 'age'
    }));

    return flipped;

}

const dataObj = [
    {
        name: 'David',
        age: 20
    }
];

const flip = flipObject(dataObj);
console.log(flip);

//* =====================================
const switchValueToKey = (arr) => {
    console.log(arr);
    const result = [];

    arr.forEach((item) => {
        let temp = {};

        for (let key in item) {
            // console.log(key);
            // console.log(item[key]);
            temp[item[key]] = key;
        }

        result.push(temp);
    });

    return result;
};

switchValueToKey([{ name: 'David', age: 20 }]);
console.log(switchValueToKey([{ name: 'David', age: 20 }]));

//* NO.5 ================================
function recursion(amount) {
    
    let factorial = amount - 1;
    if (amount == 0) {
        return 1;
    } else {
        return amount * recursion(factorial);

    }

}

console.log(recursion(5));

//* =====================================
// const factorial = (n) => {
//     if (n === 0) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }

// const n = 5
// console.log(factorial(n));

//* =====================================
const factorial = (n) => {
    if (n === 0) {
        return {
            steps: ["1"],
            total: 1,
        };
    } else {
        const next = factorial(n - 1);

        return {
            steps: [n, ...next.steps],
            total: n * next.total,
        };
    }
};

const n = 5;
const { steps, total } = factorial(n);
console.log(steps.join(" x ") + " = " + total);
console.log(steps.reverse().join(" x ") + " = " + total);