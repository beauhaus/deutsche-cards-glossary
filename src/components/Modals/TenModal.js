import React, {Component} from 'react';
import Modal from 'react-modal';


class TenModal extends Component {
    render(props) {
        return(
            <Modal 
            className="ten-modal"
            isOpen={!!props.tenModalOpen}
            contentLabel="ten-modal"
            >
                <h1>Ten Modal</h1>
            </Modal>
        )
    }
}

export default TenModal;