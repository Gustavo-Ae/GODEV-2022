//JSON

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

const todosJSON = JSON.stringify(todos)  //Transforma uma lista em JSON

const todosList = JSON.parse(todosJSON)  //Transforma JSON em uma lista 

console.log(todosJSON)