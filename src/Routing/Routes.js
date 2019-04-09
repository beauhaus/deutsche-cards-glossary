import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import MainNav from './MainNav';

import AddVocabPage from '../components/AddVocabPage';
import EditVocabPage from '../components/EditVocabPage';
import VocabItemDashboard from '../components/VocabItemDashboard';
import beauplate from '../components/beauplate';
import FourOhFour from './FourOhFour';

const RouterLiner = styled.div`
    width: 100wv;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(20, 1fr);
    `;

// TODO: dynamic routing refusing "/" for some reason on edit page
const Routes = (props) => (
    <BrowserRouter>
        <RouterLiner className="router-liner">
            <MainNav />
            <Switch>
                <Route path="/" exact={true} />
                
                <Route path="/edit:id" component={EditVocabPage} />
                <Route path="/addVocabPage" component={AddVocabPage} />
                <Route path="/vocabItemDashboard" component={VocabItemDashboard} />
                <Route path="/beauplate" component={beauplate} />
                <Route component={FourOhFour} />
            </Switch>
        </RouterLiner>
    </BrowserRouter>
)

module.exports = Routes;