const moment = require.requireActual('moment')

// jest 
export default (timestamp=0) => {
    
    return moment(timestamp);
    
}