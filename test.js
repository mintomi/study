function add(a,b){
    return a + b
}

const a = 2;
const  b = 3;
console.log(add(a,b));

class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this.name);
    }
}

const manami =new Person("manami");
manami.showName();

const func = add;
console.log(func(1,2));

const obj {
    a: "12",
    b: "34",
}