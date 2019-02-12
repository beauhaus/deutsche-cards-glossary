import React from 'react';
import {Link} from 'react-router-dom';


const FourOhFour = () => (
    <div>
        <h1>OOOPS! 404</h1>
        <h2><Link to="/">GO HOME?</Link></h2>
    </div>
)

module.exports = FourOhFour;