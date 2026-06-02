class Animal {
    alive = true;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`This ${this.name} is eating`);
    }
    sleeping() {
        console.log(`This ${this.name} is sleeping`);
    }
    move(speed) {
        console.log(`The ${this.name} moves at a speed of ${speed} mph`);
    }
}

class Rabbit extends Animal {
    static name = "rabbit";

    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }
    run() {
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }

}

class Fish extends Animal {
    static name = "fish";

    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim() {
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}

class Hawk extends Animal {
    static name = "hawk";
    constructor(name, age, flySpeed) {
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly() {
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed);
    }

}

// super = keyword is used in classes to call the constructor or access the properties
//          this = this object
//          super = the parent

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 2, 12);
const hawk = new Hawk("hawk", 3, 50);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);

rabbit.run();

// getters and setters

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set width(newWidth) {
        if (newWidth > 0) {
            this._width = newWidth;
        } else {
            console.error("Width must be a positive number")
        }
    }

    set height(newHeight) {
        if (newHeight > 0) {
            this._height = newHeight;
        } else {
            console.error("Height must be a positive number")
        }
    }

    get width() {
        return this._width.toFixed(1);
    }

    get height() {
        this._height.toFixed(1);
    }

    get area() {
        return (this._width * this._height).toFixed(1);
    }
}

const rectangle = new Rectangle(3, 4);
rectangle.width = 5;
rectangle.height = 6;

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName) {
        if (typeof newFirstName === "string" && newFirstName.length > 0) {
            this._firstName = newFirstName;
        }
        else {
            console.error("First name must be a non-empty string");
        }
    }

    set lastName(newLastName) {
        if (typeof newLastName === "string" && newLastName.length > 0) {
            this._lastName = newLastName;
        }
        else {
            console.error("Last name must be a non-empty string");
        }
    }

    set age(newAge) {
        if (newAge >= 0) {
            this._age = newAge;
        }
        else {
            console.error("Age must be a positive integer");
        }
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get fullName() {
        return this._firstName + ` ` + this._lastName;
    }

    get age() {
        return this._age;
    }
}

const person = new Person(`Alex`, `Tiu`, 44);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);

// destructuring = extract values from arrays and objects. [] - array destructuring {} - object destructuring

// Example 1

let a = 1;
let b = 2;

[a,b] = [b,a];