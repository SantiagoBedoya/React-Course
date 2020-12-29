import '@testing-library/jest-dom'
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import '@testing-library/react-hooks';

Enzyme.configure({ adapter: new Adapter() });
import {createSerializer} from 'enzyme-to-json';
 
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));