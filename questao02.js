console.log('********** 2ª Questão ************\n');

let entrada = 8

if (!Number.isInteger(entrada)) {
    console.log(entrada, 'Type', typeof entrada, '\nHouve um erro!! Verifique os dados de entrada.');
    return;
}
function fibonacci(entrada) {
    if (entrada < 2) {
        return entrada;
    } else {
        return fibonacci(entrada - 1) + fibonacci(entrada - 2);
    }
}
let count = 0
for (let i = 0; i <= entrada; i++) {
    console.log("(" + i + "):" + fibonacci(i));

    if (entrada === fibonacci(i)) {
        count++
    }

}
if (count === 0)
    console.log(entrada, 'não faz parte da sequência');
else
    console.log(entrada, 'faz parte da sequência');
