//* EXERCISE NO.1 ==========================
function calculateArray(student) {
    const score = student.map(item => item.score);

    const currentDate = new Date();
    const age = student.map(item => {
        const dateofBirth = new Date(item.age);
        let age = currentDate.getFullYear() - dateofBirth.getFullYear();
        
        if (currentDate.getMonth() < dateofBirth.getMonth() || 
            currentDate.getMonth() === dateofBirth.getMonth() &&
            currentDate.getDate() < dateofBirth.getDate()) {
                age--;
            }

            return age;
    });

    let calculateScore = {
        highest: Math.max(...score),
        lowest: Math.min(...score),
        average: score.reduce((item, value) => 
            item + value, 0) / score.length
    };

    let calculateAge = {
        highest: Math.max(...age),
        lowest: Math.min(...age),
        average: age.reduce((item, value) => 
            item + value, 0) / age.length
    };

    return { 
        score: calculateScore, 
        age: calculateAge 
    };
}

const students = [
    { 
        name: "Albert Zarry", 
        email: "albertzarry@mail.com", 
        age: "1999-08-03", 
        score: 87 
    },
    {   name: "Jake Knapp", 
        email: "jakeknapp@mail.com", 
        age: "1995-10-04", 
        score: 78 
    }, 
    {   name: "Carol Dweck", 
        email: "caroldweck@mail.com", 
        age: "1990-01-21", 
        score: 90 
    }
];

const calculation = calculateArray(students);
console.log(calculation);

//* EXERCISE NO.2 ==========================

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

}

class Transaction extends Product {
    constructor(name, price) {
        super(name, price);
        this.total = 0;
        this.product = [];
    }

    addToChart(product, qty) {
        this.product.push({ product, qty });
        this.total += product.price * qty;

    }
    
    showTotal() {
        console.log(`Total: $${this.total.toFixed(2)}`);
    }

    checkOut() {
        console.log("Transaction completed!");
        console.log("Transaction details:");
        for (const item of this.products) {
            console.log(`${item.qty}pcs ${item.product.name} - $${(item.product.price * item.qty).toFixed(2)}`);
        }
        console.log(`Total: $${this.total.toFixed(2)}`);
        return {
            total: this.total,
            products: this.products
        };
    }
}

const mouse = new Product("Mouse SteelSeries", 500000);
const keyboard = new Product("Keyboard MX Magic", 1700000);

const transaction = new Transaction();
transaction.addToChart(keyboard, 4)
transaction.addToChart(mouse, 2);
transaction.showTotal();
