import React, {Component} from 'react';
import Modal from 'react-modal';
import ModalInlay from './ModalInlay';


class ModalWrapper extends Component {
    componentWillMount() {
        // CODE FOUND HERE=> https://stackoverflow.com/questions/48269381/warning-react-modal-app-element-is-not-defined-please-use-modal-setappeleme
        //in order to avoid common `appElement={el}` warning
        Modal.setAppElement('body');
    }
    
    render() {
        return(
            <Modal 
            className="modal-base"
            isOpen={this.props.modalIsOpen}
            contentLabel="modal-base"
            onRequestClose={this.props.fiftyModalClear}
            closeTimeoutMS={1500}
            overlayClassName="Overlay"
            >
               <ModalInlay {...this.props}/>
            </Modal>
        )
    }
}

export default ModalWrapper;