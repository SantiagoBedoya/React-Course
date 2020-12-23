import { getHeroeByIdAsync } from "../../base/09-promesas"
import heroes from "../../data/heroes";

describe('Pruebas en 09-promesas.js', () => {
  test('debe retornar un heroe async', (done) => {
    const id = 1;
    getHeroeByIdAsync(id)
      .then(heroe => {
        expect(heroe).toBe(heroes[0]);
        done();
      });
  });

  test('debe retornar un error si el heroe por id no existe', (done) => {
    const id = 99;
    getHeroeByIdAsync(id).catch(err => {
      expect(err).toBe('No se pudo encontrar el héroe');
      done();
    })
  });

})
