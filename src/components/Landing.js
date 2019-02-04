import React, {Component} from 'react'
import Menu from './Menu'
import DisplayCtrl from './DisplayCtrl'
// import {getLS} from '../utils/utils'



class Landing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            init: 'state',
            dbArray: props.db,
            lowBound: null,
            upBound: null
        }
    
    
        this.onRangeSubmit = this.onRangeSubmit.bind(this);
        this.setRange = this.setRange.bind(this);
        // this.getLS = this.getLS.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this)
    }
 componentDidMount() {
    // console.log("landing DID mnt")
    // const dbStore = getLS();        
//   this.setState(() => {
//       arrayMod: dbStore
//   })
//   console.log("t.s.arr: ", this.state.arrayMod.length)

 }
    componentWillMount() {
        // console.log("landing WILL mnt")
    }
    componentWillUpdate(nextProps, nextState) {
        // console.log("landing UPDATED")

        // console.log("Land update: \nLow: ", this.state.lowBound, "\n up: ", this.state.upBound, "\n len: ", this.state.arrayMod.length)
    }
    setRange() {
        console.log("landing setRange RUN")

        const {lowBound, upBound} = this.state;
        // console.log("setRange: e.target", lowBound, upBound)
    }
    handleInputChange(e) {
        const tgt = e.target;
        const value = tgt.value;
        const name = tgt.name;
        // console.log(`hInpChange: ${name}: ${value}`)
        // console.log("arrmodLength: ", this.state.arrayMod.length)
        this.setState( {
          [name]: value}
          );
      }
    onRangeSubmit(e) {
        e.preventDefault();
        this.setRange();
    }
    // getLS() {
    //     const dbStore = getLS();
    //     console.log("dbStore: ", dbStore)
    // }


    render() {
        // <span>{`${lowBound}, ${upBound}, ${arrayMod.length}`}</span>
        const {lowBound, upBound, dbArray} = this.state;
        return (
            <div className="landing-comp">
            
            <Menu  handleInputChange={this.handleInputChange} onRangeSubmit={this.onRangeSubmit}/>
        {
            (lowBound && upBound) &&
            <DisplayCtrl 
                lowBound={lowBound} 
                upBound={upBound} 
                dbPayload={dbArray}
            /> }
            </div>
        )
    }
}

module.exports = Landing;

/*

 constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    console.log("targ, name, val: ", target, name, value)

    this.setState({
      [name]: value
    });
  }

  */