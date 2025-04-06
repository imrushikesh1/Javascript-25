class Human{
    age;
    #wt;
    ht;

    constructor(newAge, newWeight, newHeight) {
        this.age = newAge;
        this.#wt = newWeight;
        this.ht = newHeight;
    }

    get FetchWeight() {
        return this.#wt;
    }

    set ModifyWeight(val) {
        this.#wt = val;
    }
}

let obj = new Human(50, 190, 200);
console.log(obj.FetchWeight);
