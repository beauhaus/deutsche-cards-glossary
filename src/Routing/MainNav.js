import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// ReactDOM.render(<Landing db={db}/>, document.getElementById('app'));

const StyledNav = styled.nav`
    grid-row: 1;
    grid-column: 1;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr;
    & ul {
        grid-row: 1;
        grid-column: 1/6;
        /* border: 1px solid pink; */
        color: lightblue;
        background: grey;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: 1fr;
        li {
            list-style: none;
            & a {
                color: #fff;
                font-weight: 100;
                text-decoration: none;
                float: right;
                font-size: 3rem;
                margin: .5rem;
            }
        }
        li:nth-of-type(1) {
            background: #C9e4ca;
        }
        li:nth-of-type(2) {
            background: #87bba2;
        }
        li:nth-of-type(3) {
            background: #55828b;
        }
        li:nth-of-type(4) {
            background: #3b6064;
        }
        li:nth-of-type(5) {
            background: #364958;
        }
        & > li:hover {
            box-shadow: inset 12px 0px 14px 0px rgba(0, 0, 0, 0.5);
            text-align: right;
        }

    }
    & .is-active {
        text-shadow: 1px 1px 2px #000;
        color: #fff;
    }
`;

const MainNav = (props) => (
    <StyledNav className="main-nav">
        <ul>
            <li>
                <NavLink to="/" activeClassName="is-active">Home</NavLink>
            </li>
            <li>
                <NavLink to="/template" activeClassName="is-active">Template</NavLink>
            </li>
            {/**
                <li>
                <NavLink to="/edit:0" activeClassName="is-active">Edit</NavLink>
                </li>
            */}
            <li>
                <NavLink to="/AddVocabPage" activeClassName="is-active">Add</NavLink>
            </li>
            <li>
                <NavLink to="/WordListDashboard" activeClassName="is-active">List</NavLink>
            </li>
        </ul>

    </StyledNav>
)

module.exports = MainNav;