const numeros = ["534", "856", "832", "903", "233"] 

function maiorNumero  (array)  {
let maior_numero = array.reduce((numero1, numero2) => numero1 > numero2 ? numero1 : numero2);
   console.log(maior_numero)
};
maiorNumero(numeros)


function menorNumero (array) {
    let menor_numero = array.reduce((numero1, numero2) => numero1 < numero2 ? numero1 : numero2);
  
    console.log(menor_numero)
};
menorNumero(numeros)

module.exports = {maiorNumero,menorNumero};
