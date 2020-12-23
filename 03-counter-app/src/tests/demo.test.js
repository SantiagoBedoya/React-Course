describe('Pruebas demo.test.js', () => {
  test('deben de ser iguales los strings', () => {
    const mensaje = 'Hola mundo';
    const mensaje2 = `Hola mundo`;
  
    expect(mensaje).toBe(mensaje2);
  })
})
