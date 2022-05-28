// Funções

function sum(a,b){
    return a + b
}

const sumValue = sum(2,2)

console.log(sumValue)

// ArrowFunctions - Uma forma diferente de escrever funções:

const sumArrow1 = (a,b) => {
    return a + b
}

const sumArrow = (a,b) => a + b   //dessa forma é bem mais rápido e simples, e faz a mesma coisa que a função de cima

console.log(sumArrow(10,10))

