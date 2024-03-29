class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi... I am $(this.name)!`;
    }
    getDescription() {
        return `$(this.name) is $(this.age) year(s) old.`;
    }
}

const me = new Person("Ritesh Mukim", 25);
console.log(me.getDescription());

console.log(new Person().getDescription());