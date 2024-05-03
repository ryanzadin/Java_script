const { maior, menor } = require ('./unamed');

test('Achar o maior e o menor numero entre o array', () => {
    expect ( maior (534, 856, 832, 903, 233)).toBe(903);
    expect ( menor (534, 856, 832, 903, 233)).toBe(233);
});

