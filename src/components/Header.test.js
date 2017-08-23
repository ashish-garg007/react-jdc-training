import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Header from './Header';

describe('Header', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
  });

  it('should render properly', () => {
    const wrapper = shallow(<Header title="headers test title"/>);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('should handle a click event', () => {
    const onButtonClick = jest.fn(); //sinon.spy();
    const wrapper = mount(<Header onHeaderClick={onButtonClick} />);
    wrapper.find('#logo').simulate('click');
    expect(onButtonClick).toHaveBeenCalled();
  });
});