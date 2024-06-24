// Make your Counter class here
class Counter {
    #count

    constructor() {
        this.#count = 0
    }

    increment() {
        this.#count++
    }

    reset() {
        this.#count = 0
    }

    getCount() {
        return this.#count
    }
}

// Replace `null` with an _instance_ of your counter
const counterInstance = new Counter()
counterInstance.increment()
console.log(counterInstance.getCount())
counterInstance.reset()
console.log(counterInstance.getCount())

// Please don't change the lines below!
export { Counter, counterInstance }
