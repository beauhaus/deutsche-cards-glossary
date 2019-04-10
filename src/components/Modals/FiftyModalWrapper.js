import React, {Component} from 'react';
// import { connect } from 'react-redux';
// import VocabListItem from './VocabListItem';
// import selectVocabItems from '../reduxUtils/selectors/vocabSelectors';
import FiftyMoDalInlay from './FiftyMoDalInlay';
import Modal from 'react-modal';


class FiftyModalWrapper extends Component {
    componentWillMount() {
        // CODE FOUND HERE=> https://stackoverflow.com/questions/48269381/warning-react-modal-app-element-is-not-defined-please-use-modal-setappeleme
        //in order to avoid common `appElement={el}` warning
        Modal.setAppElement('body');
    }
    
    render() {
        return(
            <Modal 
            className="fifty-modal"
            isOpen={this.props.modalIsOpen}
            contentLabel="fifty-modal"
            onRequestClose={this.props.fiftyModalClear}
            closeTimeoutMS={1500}
            overlayClassName="Overlay"
            >
               <FiftyMoDalInlay {...this.props}/>
            </Modal>
        )
    }
}

export default FiftyModalWrapper;