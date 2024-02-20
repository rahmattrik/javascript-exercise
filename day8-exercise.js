//* NO.1 ===============================
// class Player {
//     constructor(name) {
//       this.name = name;
//       this.health = 100;
//       this.power = 10;
//     }
  
//     hit(power) {
//       this.health -= power; //this.health = this.health - power
//     }
  
//     useItem(item) {
//       this.health += item.health;
//       this.power += item.power;
//     }
  
//     showStatus() {
//       console.log(`${this.name}'s Status - Health: ${this.health}, Power: ${this.power}`);
//     }
//   }
  
//   class ShootingGame {
//     constructor(player1, player2) {
//       this.player1 = player1;
//       this.player2 = player2;
//     }
  
//     getRandomItem () {
//       return {
//         health: Math.floor(Math.random() * 1.9) * 10,
//         power: Math.floor(Math.random() * 1.9) * 10,
//       }
//     }
  
  
//     start() {
//       for (
//         let currentPlayer = this.player1, otherPlayer = this.player2;
//         this.player1.health > 0 && this.player2.health > 0;
//         [currentPlayer, otherPlayer] = [otherPlayer, currentPlayer]
//       ) {
//         console.log("Current turn: ", currentPlayer.name);
//         currentPlayer.showStatus();
//         otherPlayer.showStatus();
  
//         const itemForCurrentPlayer = this.getRandomItem;
//         const itemForOtherPlayer = this.getRandomItem;
  
//         console.log(`${currentPlayer.name} gets an item: `, itemForCurrentPlayer);
//         console.log(`${otherPlayer.name} gets an item: `, itemForOtherPlayer);
  
//         currentPlayer.useItem(itemForCurrentPlayer);
//         otherPlayer.useItem(itemForOtherPlayer);
  
//         currentPlayer.showStatus();
//         otherPlayer.showStatus();
  
//         otherPlayer.hit(currentPlayer.power);
//       }
  
//       const winner = this.player1.health > 0 ? this.player1.name : this.player2.name;
//       console.log(`Winner is ${winner}`);
//     }
//   }
  
//   const player1 = new Player("Ogata");
//   const player2 = new Player("Knapp");
//   const game = new ShootingGame(player1, player2);
//   game.start();

//* ====================================
class Player {
    constructor(name, health = 100, power = 10) {
        this.name = name;
        this.health = health;
        this.power = power;
    }

    hit(power) {
        this.health -= power;
    }

    useItem(item) {
        this.health += item.health;
        this.power += item.power;
    }

    showStatus() {
         return`${this.name} (Health => ${this.health}, Power => ${this.power})`;
    }
}

class ShootingGame {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }

    getRandomItem() {
        const health = Math.random() < 0.5 ? 0 : 10;
        const power = Math.random() < 0.5 ? 0 : 10;

        return { health, power }
    }

    start() {
        while (this.player1.health > 0 && this.player2.health > 0) {
            //Menampilkan status player
            this.player1.showStatus();
            this.player2.showStatus();

            //Generate random item untuk tiap player dan langsung digunakan
            const itemPlayer1 = this.getRandomItem();
            const itemPlayer2 = this.getRandomItem();
            this.player1.useItem(itemPlayer1);
            this.player2.useItem(itemPlayer2);

            this.player1.hit(this.player2.power);
            this.player2.hit(this.player1.power);

            //Menampilkan status player setelah terkena hit
            this.player1.showStatus();
            this.player2.showStatus();

        }

        if (this.player1.health <= 0) {
            return `${this.player2.name} Win`
        } else {
            return `${this.player1.name} Win`
        }

    }
}

// Contoh penggunaan:
const player1 = new Player("Player A");
const player2 = new Player("Player B");

const game = new ShootingGame(player1, player2);
game.start();
console.log(game.start());


//* NO.2 ===============================
// class Employee {
//   constructor(baseSalary) {
//     this.baseSalary = baseSalary;
//     this.workingHours = 0;
//   }
  
//   addWorkingHours(hours) {
//     this.workingHours += hours;
//   }

//   calculateSalary() {
//     return this.baseSalary;
//   }
// }

// class FullTimeEmployee extends Employee {
//   constructor(baseSalary, overtimeSalary) {
//     super(baseSalary);
//     this.overtimeSalary = overtimeSalary;
//   }

//   calculateSalary() {
//     if (this.workingHours > 6) {
//       return (6 * this.baseSalary) + ((this.workingHours - 6) * this.overtimeSalary);
//     } else {
//       return this.baseSalary * this.workingHours;
//     }
//   }
// }

// class PartTimeEmployee extends Employee {
//   constructor(baseSalary, overtimeSalary) {
//     super(baseSalary);
//     this.overtimeSalary = overtimeSalary
//   }

//   calculateSalary() {
//     if (this.workingHours > 6) {
//       return (6 * this.baseSalary) + ((this.workingHours - 6) * this.overtimeSalary);
//     } else {
//       return this.baseSalary * this.workingHours;
//     }
//   }
// }

// const fullTime = new FullTimeEmployee(100000,75000);
// fullTime.addWorkingHours(7);
// console.log(fullTime.calculateSalary());

// const partTime = new PartTimeEmployee(50000, 30000);
// partTime.addWorkingHours(8);
// console.log(partTime.calculateSalary());

//* ======================================
class Employee {
    //Parent class
    constructor(name) {
        this.name = name;
        this.workingHours = 0;

        console.log(name);
    }
}

class FulltimeEmployee extends Employee{
    //Child class
    constructor(name) {
        super(name); //Argument
    }

    addWorkingHours(hours) {
        this.workingHours += hours;
    }

    calculateTotalSalary() {
        const nomalRate = 100000;
        const overTimeRate = 75000;

        if (this.workingHours <= 6) {
            return {
                total: 
                "Rp " + 
                (this.workingHours * nomalRate)
                .toLocaleString("id-ID"),

            };
        } else {
            const normalHour = 6;
            const overTimeHour = this.workingHours - normalHour;

            return {
                total: 
                "Rp " + 
                ((overTimeHour * overTimeRate) + 
                (normalHour * nomalRate))
                .toLocaleString("id-ID"),
            };
        }
    }

}


//FUllTIME
const employee1 = new FulltimeEmployee("budi");
employee1.addWorkingHours(7);
console. log (employee1. calculateTotalSalary());

//PARTIME
// const employee2 = new ParttimeEmployee("joko");
// employee2.addWorkingHours(7);
// console.log(employee2. calculateTotalSalary());