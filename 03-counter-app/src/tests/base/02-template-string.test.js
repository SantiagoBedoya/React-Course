import {getSaludo} from '../../base/02-template-string';
describe('Pruebas en 02-template-string.js', () => {
  test('getSaludo debe retornar hola <nombre>', () => {
    const nombre = 'santi';
    const saludo = getSaludo(nombre);
    expect(saludo).toBe('Hola '+nombre);
  })
  
})
