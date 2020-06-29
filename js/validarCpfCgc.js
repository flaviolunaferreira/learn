// estou comentando cada ação para ficar mas claro o entendimento
// se fosse em java, criaria uma classe para cada funçao, mas em js vou criar uma função para cada ação 

/**
 * Limpa o texto digitado deixando apenas números
 * @param {String contendo o numero digitado} numero
 * @returns {String com apenas o numero limpo} 
 */
function limparEntrada(numero){
    let verificarNumeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let aux = "";
    numero = numero.trim();                             //tira os espaços em branco
    for(var i = 0; i < numero.length; i++){             // copia para a avariavel aux só o que for número    
        if(verificarNumeros.indexOf(numero[i]) > -1){
            aux += numero[i];
        }
    }c3
}

function verificarCpf(numeroCpf){
    const multiplicadorDigito1 = [10, 9, 7, 6, 5, 4, 3, 2];
    const multiplicadorDigito2 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
    var soma = 0;
    var resto = 0
    var digito = "";
    var cpfTemporario = "";

    cpfTemporario = numeroCpf.substring(0, 9);
    var calculo = new parseInt[cpfTemporario.length];
    for(var i = 0; i < cpfTemporario.length; i++){
        calculo[i] = parseInt(cpfTemporario.substring(i, i + 1));
    }
    soma = 0;
    for(var i = 0; i < cpfTemporario.length; i++){
        soma += calculo[i] * multiplicadorDigito1[i]; 
    }
    resto = soma % 11;
    if(resto < 2 ){
        resto = 0;
    } else {
        resto = 11 - resto;
    }
    digito = toString(resto);
    cpfTemporario = cpfTemporario + digito;

    var calculo2 = new parseInt[cpfTemporario.length];
    for(var i = 0; i < cpfTemporario.length; i++){
        soma += calculo2[i] * multiplicadorDigito2[i];
    }
    resto = soma % 11;
    if(resto < 2 ){
        resto = 0;
    } else {
        resto = 11 - resto;
    }
    digito = toString(resto);
    cpfTemporario = cpfTemporario + digito;
    console.log(cpfTemporario)
    return cpf.endsWith(cpfTemporario) 
} 