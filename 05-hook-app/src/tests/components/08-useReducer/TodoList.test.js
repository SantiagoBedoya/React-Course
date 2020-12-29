import { shallow } from 'enzyme';
import { TodoList } from '../../../components/08-useReducer/TodoList';
import { demoTodos } from '../../fixtures/demoTodos';
describe('Pruebas en <TodoList />', () => {

  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(
    <TodoList 
      todos={demoTodos}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  )

  test('debe de mostrase correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  })

  test('debe de debe de tener 2 <TodoListItem />', () => {
    expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
    expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function))
  })


})
