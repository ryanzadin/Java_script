const {calcularMDC} = require ('./mdc')

test('Calcular o MDC dos valores 24 e 36', () => {
    expect(calcularMDC(24,36)).toBe(12);
});