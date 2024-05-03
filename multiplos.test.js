const { findMultiples, sumArray } = require('./multiplos2');



test('Soma de múltiplos de 5 e 7 abaixo de 1000', () => {

  const multiples = findMultiples(1000, 5, 7); // Encontra múltiplos de 5 e 7 abaixo de 1000

  const result = sumArray(multiples); // Soma os múltiplos encontrados

  expect(result).toBe(156361); // Verifica se o resultado é o esperado

});