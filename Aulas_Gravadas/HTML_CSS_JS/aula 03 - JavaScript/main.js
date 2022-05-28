// ---------- Loops -------------

const cars = ["Ferrari", "Tesla","Mercedes"]

for(let i = 0;i < cars.length;i++){
    console.log(cars[i])
}

console.log("------------------------")

//Outra forma de fazer a mesma coisa , só que mais rápido :

for(let car of cars){
    console.log(car)
}

console.log("------------------------")

//Outra forma de fazer a mesma coisa :

cars.forEach(function(car,index){
    console.log("Carro: "+car+"\nPosição: "+index)
})

console.log("------------------------")

// ------------- WHILE ---------------

let index = 0

while(index < 10){
    console.log(index)
    index++              //É a mesma coisa que index = index + 1
}

// For In - Usa principalmente para objetos 

const person = {
    name:"Jane",
    age:21,
}

for(property in person){
    console.log(property)  // Vai acessar os nomes das caracteristicas. Exemplo: name,age
}

//OBS : Esse Loop não é tão perfomático.

for(property in person){
    console.log(person[property])  // Vai acessar o valor armazenado dessas caracteristicas.Exemplo: Jane,21 . 
}

