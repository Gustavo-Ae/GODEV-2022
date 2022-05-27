//Listas 

const names = ["Felipe","João","Julia",10,false]

const joao = names[1]

names.push("Pedro") //adiciona elemento no final do array

names.unshift("Fernanda") //adiciona elemento no inicio do array

names.pop() //remove o ultimo item do array
names.pop()
names.pop()

names[3] = "Gustavo"

const indexOfFelipe = names.indexOf("Felipe")  //Vai mostrar a posição do elemento.

const sortedNames = names.sort()  //Ele ordenou a lista em ordem alfabética

const namesIsArray = Array.isArray(names)

console.log("Quantidade de Nomes: "+names.length)
console.log("Ordem Alfabética: "+sortedNames)
console.log(namesIsArray)
