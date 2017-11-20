var a = 10; // definisce variabile con tipo
var b = 'Pippo';
// a='pippo';  // errore
console.log(a);
console.log(b);
// arrow function
//let log = (msg: string): void => console.log(msg);
var log = function (msg) {
    if (msg === void 0) { msg = 'this is the default'; }
    return console.log(msg);
};
function sum(a, b) {
    return a + b;
}
function biggerLog(msg) {
    if (msg === void 0) { msg = "prova"; }
    var other = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        other[_i - 1] = arguments[_i];
    }
    console.log(msg + " \n        " + other.join(' '));
}
log('Hello');
log();
biggerLog('Hello', 'a', 'b', 'f');
var c = 3; // usare any il meno possibile!
c = 'pippo';
// Array
//let d: number[] = [1, 2, 3];
//d.push('pippo'); // errore
// Altra definizione di array
// <> è un generics, ovvero definisco un array, ma di cosa? di numeri. Array è una classe che si prenderà oggetti number.
var d = [1, 2, 4];
var e = ['a', 'b'];
//let de: any[] = [...d, ...e];
// con i generics
var de = d.concat(e);
// destructuring
var first = d[0], second = d[1];
console.log(first);
console.log(second);
var person = {
    fistname: 'Pippo',
    lastname: 'PPP'
};
var fistname = person.fistname, lastname = person.lastname;
console.log(fistname);
console.log(lastname);
// classi
var Person = /** @class */ (function () {
    function Person(firstname, lastname) {
        this._age = 10; // naming convention: prefisso '_' per private // private è ts, non ES6
        this.firstname = firstname;
        this.lastname = lastname;
    }
    Person.prototype.sayHi = function () {
        return "Hi " + this.firstname;
    };
    Person.prototype.greet = function () {
        return "Hello $(this.firstname) " + this.lastname;
    };
    return Person;
}());
var pippo = new Person('Pippo', 'Pluto');
console.log(pippo.sayHi());
var pluto = {
    firstname: 'Pluto',
    lastname: 'iiii',
    age: 10,
    street: 'ppp' // senza definizione con '?' dà errore, parametro non definito
};
var paperino = {
    firstname: 'Paperino',
    lastname: 'zzzz',
    age: 10
};
