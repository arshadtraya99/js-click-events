class Human {
    age ;
    #name;
    constructor(age = 0 , name = "") {
        this.age = age;
        this.#name = name
    }
    walking() {
        console.log("I am Walking");
    }
    running() {
        console.log("I am Running");
    }
    getName() {
        return this.#name;
    }
}

let a = new Human(19 , "Arshad");
a.walking();
console.log(a.age)
a.age = 19;
console.log(a.age)
console.log("The Name is : " , a.getName())
