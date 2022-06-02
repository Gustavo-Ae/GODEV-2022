//             Selecionando elementos do DOM - Serve para pegar os elementos do HTML e trazer para o JavaScript

// const addUserText = document.getElementById("add-user")  //vai retornar uma referencia do elemento 

const addUserText = document.querySelector("#add-user") //vai retornar o elemento em si

addUserText.textContent = "Adicionar o Usuário"

console.log(addUserText)

const myForm = document.querySelector(".container #my-form")

console.log(myForm)

//               Selecionar multiplos elementos : 

// const allItems = document.querySelectorAll(".items .item")

// console.log(allItems)             //retorna um NodeList que é basicamente uma lista
// console.log(allItems[0]) 

//                HTML Colection - NÃO é recomendado porque não da para utilizar métodos de listas 

const allItems = document.getElementsByClassName("item")

console.log(allItems)


