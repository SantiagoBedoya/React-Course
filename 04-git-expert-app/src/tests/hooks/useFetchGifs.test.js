import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs"

describe('Pruebas en useFetchGifs.js', () => {

  test('debe de retornar el estado inicial', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Nissan'));
    const { data, loading } = result.current;
    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test('debe de retorn un arreglo de imgs y el loading en false', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Nissan'));
    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  })
  


})
