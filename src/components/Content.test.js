import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Content from './Content';

describe('<Content>', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    let setTitle = jest.fn();
    ReactDOM.render(<Content setTitle={setTitle} />, div);
  });

  it('properly shows given text', () => {
    let setTitle = jest.fn();
    const output = shallow(<Content text="Unit Tests" setTitle={setTitle} />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('should set the title of its parent', () => {
    let setTitle = jest.fn();
    const output = mount(<Content text="Unit Tests" setTitle={setTitle} />);
    output.find('button').simulate('click');
    expect(setTitle).toHaveBeenCalled();
  });
});
