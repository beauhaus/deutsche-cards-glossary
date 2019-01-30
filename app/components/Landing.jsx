var React = require('react');
// var Search = require('./Search.jsx')
var Maintenance = require('./Maintenance.jsx')
var Bounds = require('./Bounds.jsx')
var SourceDB = require('./SourceDB.jsx')
// var FirstHundredModal = require('./modals/FirstHundredModal.jsx')
// const utils = require ("../utils/utils.js");



class Landing extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            init: "state",
            db: this.props.database,
            selectedModal: null
        }
     
    }

    render() {
        const {lower, upper, db} = this.state;
        {console.log("t.s.db: ", this.state.db)}
        return (
            <div id="Landing-box">
            <Maintenance/>
                <h1>Landing with form</h1>
                <hr />
                <Bounds/>
                {/*
                    <FirstHundredModal modalSelect={this.state.selectedModal}/>
                <SourceDB lower={lower} upper={upper} db={db}/>
                 <Search words={database} />
               */}
            </div>
        );
    }
}

module.exports = Landing;