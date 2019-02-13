import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import MainNav from './MainNav';
import Template from '../components/Template';
import Template2 from '../components/Template2';
import Template3 from '../components/Template3';
import Template4 from '../components/Template4';
import FourOhFour from './FourOhFour';

// const db = getLS();

// ReactDOM.render(<Landing db={db}/>, document.getElementById('app'));
const RouterLiner = styled.div`
    width: 100wv;
    height: 100vh;
    /* height: auto; */
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(20, 1fr);
    /* border: 1px solid orange; */
`;


const Routes = (props) => (
    <BrowserRouter>
        <RouterLiner className="router-liner">
            <MainNav />
            <Switch>
                <Route path="/" exact={true} />
                <Route path="/template" component={Template} />
                <Route path="/template2" component={Template2} />
                <Route path="/template3" component={Template3} />
                <Route path="/template4" component={Template4} />
                <Route component={FourOhFour} />
            </Switch>
        </RouterLiner>
    </BrowserRouter>
)

module.exports = Routes;