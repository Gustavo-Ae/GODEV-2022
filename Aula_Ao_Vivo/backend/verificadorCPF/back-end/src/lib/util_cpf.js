function buscarUnidadeFederativa(cpf){
    let unidadeFederativa;
    let nonoDigito = cpf[8];
    switch(nonoDigito) {
        case '1': unidadeFederativa = 'DF, GO, MS, MT e TO';     break;
        case '2': unidadeFederativa = 'AC, AM, AP, PA, RO e RR'; break;
        case '3': unidadeFederativa = 'CE, MA e PI';             break;
        case '4': unidadeFederativa = 'AL, PB, PE, RN';          break;
        case '5': unidadeFederativa = 'BA e SE';                 break;
        case '6': unidadeFederativa = 'MG';                      break;
        case '7': unidadeFederativa = 'ES e RJ';                 break;
        case '8': unidadeFederativa = 'SP';                      break;
        case '9': unidadeFederativa = 'PR e SC';                 break;
        case '0': unidadeFederativa = 'RS';                      break;
    }
    return unidadeFederativa;
}


function calcularDigitoVerificador(cpf, numeroDigito){
    
    let soma = 0;
    let posicaoInicial = numeroDigito - 1;
    let posicaoFinal = 9 + numeroDigito - 1;
    
    for(let i = posicaoInicial; i < posicaoFinal; i++){
        let digito = cpf[i];
        let produto = digito * (11 - i);
        soma = soma + produto;
    }

    let resto = soma % 11;
    let digitoVerificador = resto == 0 || resto == 1 ? 0 : 11 - resto;
    return digitoVerificador;
    
}

function verificarStatus(cpf){
    let digito01 = calcularDigitoVerificador(cpf, 1);    
    let digito02 = calcularDigitoVerificador(cpf, 2);    
    
    let digitoVerificadorInformado = cpf[9]+cpf[10];
    let digitoVerificadorCalculado = digito01 + '' + digito02;

    return digitoVerificadorInformado === digitoVerificadorCalculado;
}

exports.verificarStatus = verificarStatus;
exports.buscarUnidadeFederativa = buscarUnidadeFederativa;