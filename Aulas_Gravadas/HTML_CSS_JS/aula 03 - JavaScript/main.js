// Condicionais 

//DIferença entre 

// == (usado para comparação entre duas variáveis, independentemente do tipo de dados da variável.)

//=== (irá verificar o TIPO DE DADOS e comparar dois valores)

const sum = 1 + 2 

if(sum === 2){
    console.log("Sum is 2!")
}else if(sum === 3){
    console.log("Sum is 3!")
}else{
    console.log("Sum is not 2!")
}

// && (e)
// || (ou)

const sum1 = 2 + 2
const sum2 = 3 + 3

if(sum1 === 4 && sum2 === 6){
    console.log("sum1 is 4 and sum2 is 6!")
}

if(sum1 === 4 || sum2 === 6){
    console.log("sum1 is 4 and sum2 is 6!")
}

//Vamos definir váriaveis baseado em condições:

let number

if(sum === 2){
    number = 2
}else{
    number = 4
}

console.log(number)

// outra forma de fazer 

result = number === 4 ? 5 : 4

console.log(result)

//Switch 

const car = "Mercedes"

switch(car){
    case "Mercedes":
        console.log("Mercedes is beautiful!")
        break
    case "Ferrari":
        console.log("Ferrari is very red!")
        break
    case "Tesla":
        console.log("Tesla is very smart!")
        break
}

