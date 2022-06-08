 function main(n){
     
    let fatorial = 1
    while(n > 0){
        fatorial = fatorial * n
        n--
    }
    return fatorial
 }

 module.exports = main