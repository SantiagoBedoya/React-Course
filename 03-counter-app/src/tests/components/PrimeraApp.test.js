import {shallow} from 'enzyme';
import PrimeraApp from "../../components/PrimeraApp";

describe('Pruebas component PrimeraApp', () => {
  // test('debe mostrar el mensaje "Hola, Soy Goku"', () => {
  //   const saludo = 'Hola, soy goku';
    
  //   const {getByText} = render(<PrimeraApp saludo={saludo} />)

  //   expect(getByText(saludo)).toBeInTheDocument();
  // })
  

  test('debe de mostrar <PrimeraApp /> correctamente', () => {
    const wrapper = shallow(<PrimeraApp saludo="Perra" />)
    expect(wrapper).toMatchSnapshot();
  })

  test('debe de mostrar <PrimeraApp /> con subititulo', () => {
    const wrapper = shallow(
      <PrimeraApp 
        saludo="Perra"
        subtitulo="Maricones"
      />
    )
    const textParrafo = wrapper.find('h3').text();
    expect(textParrafo).toBe('Maricones');
  })
  

})
