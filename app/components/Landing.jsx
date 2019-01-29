var React = require('react');
// var Search = require('./Search.jsx')
// var Maintenance = require('./Maintenance.jsx')
var Bounds = require('./Bounds.jsx')
var SourceDB = require('./SourceDB.jsx')

const utils = require ("../utils/utils.js");



class Landing extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            init: "state",
            lower: 0,
            upper: 99,
            db: this.props.database
        }
        // this.boundsSubmitHandler = this.boundsSubmitHandler.bind(this);
    }

    // boundsSubmitHandler(lowerbounds, upperbounds) {
        // e.preventDefault();
        /*gets Partial DB*/
        // const partialDB = utils.getPartialLS(lowerbounds, upperbounds);
        // this.setState((prevState) =>{
        //     db: partialDB
        // })
    // }

    render() {
        const {lower, upper, database} = this.state;
        return (
            // <Maintenance/>
            <div id="Landing-box">
                <h1>Landing with form</h1>
                <hr />
                <Bounds boundsSubmitHandler = {this.boundsSubmitHandler}/>
                <SourceDB lower={lower} upper={upper} db={database}/>
               {/*
                 <Search words={database} />
               */}
            </div>
        );
    }
}

module.exports = Landing;