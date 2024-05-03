function calcularMDC(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

let numero1 = 24;
let numero2 = 36;
let resultado = calcularMDC(numero1, numero2);
console.log(`MDC de ${numero1} e ${numero2}: ${resultado}`);

module.exports = {calcularMDC};