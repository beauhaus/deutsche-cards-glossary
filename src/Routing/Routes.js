import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import MainNav from './MainNav';

import AddVocabPage from '../components/AddVocabPage';
import EditVocabPage from '../components/EditVocabPage';
import VocabItemDashboard from '../components/VocabItemDashboard';
import CardsDisplay from '../components/CardsDisplay';
import FourOhFour from './FourOhFour';


const RouterContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(20, 1fr);
    position: fixed;
    `;

// TODO: dynamic routing refusing "/" for some reason on edit page
const Routes = (props) => (
    <BrowserRouter>
        <RouterContainer className="router-container">
            <MainNav />
            <Switch>
                <Route path="/" exact={true} />
                
                <Route path="/edit:id" component={EditVocabPage} />
                <Route path="/addVocabPage" component={AddVocabPage} />
                <Route path="/vocabItemDashboard" component={VocabItemDashboard} />
                <Route path="/cards_display" component={CardsDisplay} />
                <Route component={FourOhFour} />
            </Switch>
        </RouterContainer>
    </BrowserRouter>
)

module.exports = Routes;