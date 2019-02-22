import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import MainNav from './MainNav';
import Template from '../components/Template';
import Template2 from '../components/Template2';
import AddVocabPage from '../components/AddVocabPage';
import WordListDashboard from '../components/WordListDashboard';
import FourOhFour from './FourOhFour';

const RouterLiner = styled.div`
    width: 100wv;
    //height: auto;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(20, 1fr);
    //border: 1px solid orange;
`;


const Routes = (props) => (
    <BrowserRouter>
        <RouterLiner className="router-liner">
            <MainNav />
            <Switch>
                <Route path="/" exact={true} />
                <Route path="/template" component={Template} />
                <Route path="/template2" component={Template2} />
                <Route path="/AddVocabPage" component={AddVocabPage} />
                <Route path="/WordListDashboard" component={WordListDashboard} />
                <Route component={FourOhFour} />
            </Switch>
        </RouterLiner>
    </BrowserRouter>
)

module.exports = Routes;

// const db = getLS();

// ReactDOM.render(<Landing db={db}/>, document.getElementById('app'));
