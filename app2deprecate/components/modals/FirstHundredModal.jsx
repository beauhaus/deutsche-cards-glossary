var React = require('react'); 
import Modal from 'react-modal';

class FirstHundredModal extends React.Component {
    constructor(props) {
        super(props)

    }
        render () {
            // {console.log("P>FirstHundy", this.props)}
            return (
            <Modal
            isOpen={true}
            contentLabel="first hundred"
            >
            </Modal>
            )
        }
    }
    
module.exports = FirstHundredModal


/*
const FirstHundredModal = (props) => (
    <Modal
    isOpen={true}
    contentLabel="first hundred"
    >
        <h2>First Hundred</h2>
    </Modal>
)
*/