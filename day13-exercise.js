/**
 * Create a class to handle queuing process in a file.
 * Create file to handle and execute queue class.
 * Each queue process takes a random interval from 1-10 seconds.
 * Clue : Use while & promise
 * 
 * OUTPUT:
 * Add orders to queue
 * [Log] Print all data in queue
 * Run process -> process queue based on random interval
 * [Log] Queue 1 Done in XXX minutes
 * [Log] Queue 2 Done in XXX minutes
 * [Log] Queue 3 Done in XXX minutes
 * [Log] Queue 4 Done in XXX minutes
 */

class FoodOrderProcess {
    #queue
    constructor() {
        this.#queue = [];
        this.readyOrder = [];
    }

    addOrder(item) {
        this.#queue.push(item);
        return "Add order success.";
    }

    #promise() {
        const tryPromise = new Promise((resolve, reject) => {
            let isError = false;
            if (isError) reject("Error");
            else reject("Success");
        });

        const asycAwait = async () => {
            console.log("Order: ");
            await tryPromise
                .then((res) => console.log(res))
                .catch((err) => console.log(err))
                .finally(() => console.log("Order is ready"))
        }
    }
    
    //Create a promise;
    //1 minutes = 60 * 1000

    orderProcess() {
        const generateTime = (Math.floor(
                Math.random() * 10.9) * 60 * 1000);

        let list = 0;
        while(list < this.#queue.length) {
            for (let i = 1; i < list; i++) {
                // this.#queue[i];
                // this.readyOrder.push(this.#queue[i]);
            }
        }

        return {
            list: this.#queue,
            time: generateTime + "minutes"
        }
    }

    showOrderList() {
        return this.#queue;
    }

    showAlreadyOrder() {
        return this.readyOrder;
    }

}

const queue = new FoodOrderProcess();
console.log(queue.addOrder("Burger"));
console.log(queue.addOrder("Ice tea"));
console.log(queue.addOrder("Churro"));
console.log(queue.addOrder("Pizza"));

/**
 * Setiap order that already will push to readyOrder
 * and it can show the time minustes of runtime
 * Which means it waill rearrange the list from orderList
 */

console.log(queue.showOrderList());
console.log(queue.showAlreadyOrder());