function add(a: unknown,  b:unknown): number | string {
    if(typeof a === 'number' && typeof b === 'number') return a + b;
    return `${a}${b}`;
}

type Personal = {
    name: string;
}

type Animal = {
    cor: string;
}

type PersonalOrAnimal = Animal | Personal;

export class Student implements Personal {
    constructor(public name: string){}
}

// Type Guards checar que a chave nome existe
function showName(obj: PersonalOrAnimal) {
   // if('name' in obj) console.log(obj.name); isso é Type Guards
  // if(obj instanceof Student) console.log(obj.name); isso também é Type Guards
  // Caso fazeres com varios tipos podes usar o tipo em cada objecto
}

console.log(showName(new Student('Hamilton Silva')));
