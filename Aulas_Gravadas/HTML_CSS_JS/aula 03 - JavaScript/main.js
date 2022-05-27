// - Map Filter e Reduce 

const numbers = [1,2,3,4,5]

const numbersMultipliedByTwo = numbers.map(function(number){ //essa função é executada em cada número da lista numbers, e baseado no return , a função map() --> retorna um novo array após a manipulação, ou seja, não sobrescreve o array original
    return number * 2
})

console.log(numbersMultipliedByTwo)

//Filter - Irá filtrar uma lista e criar uma lista nova 

const ages = [8,13,27,30,22,40]

// const evenAgens = ages.filter(function(age){
//     return age % 2 == 0 // é par
// })

// console.log(evenAgens)

//Reduce - Reduzir os valores de uma lista

const sumOfAges = ages.reduce(function(age, accumulator){
    return accumulator + age
},0) // esse 0 é o valor inicial da soma  

console.log(sumOfAges)
