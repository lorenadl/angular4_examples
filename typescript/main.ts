let a: number = 10; // definisce variabile con tipo
let b: string = 'Pippo';

// a='pippo';  // errore

console.log(a);
console.log(b);

// arrow function
//let log = (msg: string): void => console.log(msg);
let log = (msg: string = 'this is the default'): void => console.log(msg);


function sum(a: number, b: number): number {
    return a + b;
}

function biggerLog(msg: string ="prova", ...other: string[]) {
    console.log(`${msg} 
        ${other.join(' ')}`);
}

log('Hello');
log();

biggerLog('Hello', 'a', 'b', 'f');

let c: any = 3; // usare any il meno possibile!
c = 'pippo';

// Array
//let d: number[] = [1, 2, 3];
//d.push('pippo'); // errore

// Altra definizione di array
// <> è un generics, ovvero definisco un array, ma di cosa? di numeri. Array è una classe che si prenderà oggetti number.
let d: Array<number> = [1, 2, 4];

let e: string[] = ['a', 'b'];

//let de: any[] = [...d, ...e];
// con i generics
let de: Array<number|string> = [...d, ...e];

// destructuring
let [first, second] = d;
console.log(first);
console.log(second);

const person = {
    fistname: 'Pippo',
    lastname: 'PPP'
};

let {fistname, lastname} = person;
console.log(fistname);
console.log(lastname);

// per usare l'interfaccia all'interno della classe
// Quando una classe implementa questa interfaccia, deve definire questi metodi/proprietà
interface Greet {
    greet(): string;
}

// classi
class Person implements Greet {
    firstname: string; // di default è public
    lastname: string;
    private _age: number = 10; // naming convention: prefisso '_' per private // private è ts, non ES6

    constructor(firstname: string, lastname: string) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    sayHi(): string {
        return `Hi ${this.firstname}`;
    }

    greet(): string {
        return `Hello $(this.firstname) ${this.lastname}`;
    }
}

let pippo: Person = new Person('Pippo','Pluto');
console.log(pippo.sayHi());
// console.log(pippo._age); // dà errore ma in realtà funziona lo stesso perchè in js non ci sono proprietà private

// Interfaces
interface IPerson {
    firstname: string;
    lastname: string;
    age: number;
    street?: string;
}

let pluto: IPerson = {
    firstname: 'Pluto',
    lastname: 'iiii',
    age: 10,
    street: 'ppp' // senza definizione con '?' dà errore, parametro non definito
}

let paperino: IPerson = {
    firstname: 'Paperino',
    lastname: 'zzzz',
    age: 10
}