// Objeto 

const person = {
    firstName: "Gustavo",
    lastName: "Araújo",
    age: 21,
    hobbies: ["Assistir série na netflix", "Caminhada","Ler"],

    dog:{             //basicamnete é um objeto dog que está dentro do objeto pessoa.
        name:"Simba",
        age:4
    }
};

// const firstName = person.firstName
// const lastName = person.lastName
// const age = person.age
// const hobbies = person.hobbies

// Vai fazer a mesma coisa que o bloco de cima :  
const {firstName : primeiroNome, lastName, age, hobbies, dog:{name:dogName}} = person

console.log(primeiroNome)
console.log(lastName)
console.log(age)
console.log(hobbies)

console.log(person.dog.name)
console.log(dogName)

//Lista com vários objetos

const todos = [
    {
        id:1,
        description:"Estudar programação",
        isCompleted:false
    },
    {
        id:2,
        description:"Ler",
        isCompleted: true,

    },
    {
        id:3,
        description:"Treinar",
        isCompleted: true,
        
    }
]

const descriptionOfLastTodo = todos[2].description

console.log(descriptionOfLastTodo)