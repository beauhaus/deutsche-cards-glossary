//react-test-renderer
import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Routes from '../../Routing/Routes'

test('should render routes correctly',() => {
    const renderer = new ReactShallowRenderer;

    renderer.render(<Routes/>)
   

    expect(renderer.getRenderOutput()).toMatchSnapshot();

    console.log("R: \n", renderer.getRenderOutput())
})