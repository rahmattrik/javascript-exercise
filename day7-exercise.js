//* NO.1 ================================
function compareData(dataA, dataB) {
    return dataA.a === dataB.a;
    // return JSON.stringify(dataA) === JSON.stringify(dataB);
}

const dataA = { a: 1 };
const dataB = { a: 2 };
const compare = compareData(dataA, dataB);
console.log(compare);

//* =====================================
function compareObject(objA, objB) {
    return objA.a === objB.a
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

//* NO.3 ================================
//Use method array.concat()

function mergeArray(arrayA, arrayB) {
    const arrA = [...arrayA];
    const arrB = [...arrayB];
    const merge = [];

    for (let i in arrA) {
        for (let j in arrB) {
            if (JSON.stringify(arrA[i].name) == JSON.stringify(arrB[j].name)) {
                delete arrB[j];
                merge.push(arrA.concat(arrB));
            }
        }
    }

    return merge;
}

const arrayA = [
    { 
        name: "Student 1", 
        email: "student1@mail.com" 
    }, 
    { 
        name: "Studnet 2", 
        email: "student2@mail.com" 
    }
];

const arrayB = [
    { 
        name: "Student 1", 
        email: "student1@mail.com" 
    }, 
    { 
        name: "Student 3", 
        email: "student3@mai..com" 
    }
];

const mergeResult = mergeArray(arrayA, arrayB);
console.log(mergeResult);

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