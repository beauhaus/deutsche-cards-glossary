//react-test-renderer
import React from 'react';
import {shallow} from 'enzyme';
import Routes from '../../Routing/Routes'
// import toJSON from 'enzyme-to-json';


/****** ENZYME METHODS FOR SHALLOW RENDER: ******

https://airbnb.io/enzyme/docs/api/shallow.html

************************************************/

test('should render routes correctly',() => {
    const wrapper = shallow(<Routes/>)
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.find('h1').text()).toBe("Hello")
    // const renderer = new ReactShallowRenderer;
    // renderer.render(<Routes/>)
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    // console.log("R: \n", renderer.getRenderOutput())
})