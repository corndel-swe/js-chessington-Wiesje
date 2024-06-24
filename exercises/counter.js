// Make your Counter class here
class Counter {
    #count

    constructor() {
        this.#count = 0
    }

    get count() {
        return this.#count
    }
}

// Replace `null` with an _instance_ of your counter
const counterInstance = new Counter()

// Please don't change the lines below!
export { Counter, counterInstance }
