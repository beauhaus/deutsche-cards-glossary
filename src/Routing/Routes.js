import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

// import Landing from '../components/Landing';
import Template from '../components/Template';
import Template2 from '../components/Template2';
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
const MainNav = (props) => (
    <StyledHeader>
        <NavLink to="/" activeClassName="is-active">Home</NavLink>
        <NavLink to="/template" activeClassName="is-active">Template</NavLink>
        <NavLink to="/template2" activeClassName="is-active">Template2</NavLink>
        {/* 
    <NavLink to="/a" activeClassName="is-active">a</NavLink>
    <NavLink to="/b" activeClassName="is-active">b</NavLink>
*/}
    </StyledHeader>
)
const Routes = (props) => (
    <BrowserRouter>
        <div className="router-liner">
            <MainNav />
            <Switch>
                {/*
        <Route path="/" exact={true} component={Landing}/>
    */}
                <Route path="/" exact={true} />
                <Route path="/template" component={Template} />
                <Route path="/template2" component={Template2} />

                {/*TODO: exact = exact={true}??? */}
                <Route component={FourOhFour} />
            </Switch>
        </div>
    </BrowserRouter>
)

module.exports = Routes;