// Função para encontrar todos os múltiplos de x ou z abaixo de um limite especificado

function findMultiples(limit, x, z) {

    let multiples = [];
  
    for (let i = 1; i < limit; i++) {
  
      if (i % x === 0 || i % z === 0) {
  
        multiples.push(i); // Adiciona i ao array se for múltiplo de x ou z
      }
    }
    return multiples;
  
  }
  // Função para somar os elementos de um array
  function sumArray(elements) {
  
    let sum = 0;
  
    for (let element of elements) {
  
      sum += element; // Soma cada elemento ao total
  
    }
  
    return sum;
  
  }
  
  
  
  module.exports = { findMultiples, sumArray }; // Exporta as funções para uso externo