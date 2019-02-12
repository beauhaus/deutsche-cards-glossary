import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import styled from 'styled-components';

import Landing from '../components/Landing';
import Template from '../components/Template';
import FourOhFour from './FourOhFour';

// const db = getLS();

// ReactDOM.render(<Landing db={db}/>, document.getElementById('app'));

const StyledHeader = styled.header`
    & .is-active {
        font-weight: bold;
        color: fuchsia;
        background: grey;
    }
`;
const MainNav = () => (
    <StyledHeader>
    <NavLink to="/" activeClassName="is-active">Landing</NavLink>
{/* 
    <NavLink to="/a" activeClassName="is-active">a</NavLink>
    <NavLink to="/b" activeClassName="is-active">b</NavLink>
*/}
    </StyledHeader>
)
const Routes = () => (
    <BrowserRouter>
    <Switch>
    <Route path="/" exact={true} component={Landing}/>
    <Route path="/template"  component={Template}/>
    {/*TODO: exact = exact={true}??? */}
    <Route component={FourOhFour}/>
    </Switch>
    </BrowserRouter>
)

module.exports = Routes;