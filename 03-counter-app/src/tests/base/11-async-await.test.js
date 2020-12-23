import { getImagen } from "../../base/11-async-await"

describe('Pruebas en 11-async-await.js', () => {
  test('debe retornal la url', async () => {

    const url = await getImagen();

    expect(url.includes('https://')).toBe(true);
    
  })
  
})
