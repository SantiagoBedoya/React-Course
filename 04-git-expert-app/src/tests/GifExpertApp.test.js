const { shallow } = require("enzyme")
const { default: GifExpertApp } = require("../GifExpertApp")

describe('Pruebas en <GifExpertApp />', () => {
  
  test('debe de mostrarse correctamente', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  })

  test('debe de mostar una lista de categorias', () => {
    const categories = ['Nissan', 'Mazda'];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />)

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  })
  

})
