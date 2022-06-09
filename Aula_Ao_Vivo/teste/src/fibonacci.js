
function fibonacci(n){

    let serie = "0 1"
    fib = 0
    n1 = 0
    n2 = 1
    for(let termo = 3; termo <= n;termo++){
        fib = n1 + n2
        n1 = n2
        n2 = fib
        serie = serie + " " + fib
    }
    return serie
        
    
}

// 0 1 1 2 3 5 8 

 module.exports = fibonacci