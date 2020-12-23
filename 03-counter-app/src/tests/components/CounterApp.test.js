import { shallow } from "enzyme"
import CounterApp from "../../components/CounterApp"

describe('Pruebas en <CounterApp />', () => {
  let wrapper = shallow(<CounterApp />);
  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  })

  test('debe mostrar <CounterApp /> correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  })

  test('debe mostrar el valor por defecto de 100', () => {
    const wrapper = shallow(<CounterApp value={100} />);
    const counterText = wrapper.find('h2').text()
    expect(counterText).toBe('100');
  })

  test('debe de incrementar con el boton +1', () => {
    wrapper.find('button').at(0).simulate('click');
    const counterText = wrapper.find('h2').text()
    expect(counterText).toBe('1');
  })

  test('debe de decrementar con el boton -1', () => {
    wrapper.find('button').at(2).simulate('click');
    const counterText = wrapper.find('h2').text()
    expect(counterText).toBe('-1');
  })

  test('debe de reiniciar el valor con el boton reset', () => {
    const wrapper = shallow(<CounterApp value={105} />);
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    const counterText = wrapper.find('h2').text()
    expect(counterText).toBe('105');
  })
  
})
