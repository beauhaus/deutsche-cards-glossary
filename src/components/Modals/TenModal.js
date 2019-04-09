import React, {Component} from 'react';
import Modal from 'react-modal';


class TenModal extends Component {
    componentWillMount() {
        // CODE FOUND HERE=> https://stackoverflow.com/questions/48269381/warning-react-modal-app-element-is-not-defined-please-use-modal-setappeleme
        //in order to avoid common `appElement={el}` warning
        Modal.setAppElement('body');
    }
    render(props) {
        return(
            <Modal 
            className="ten-modal"
            isOpen={!!this.props.tenModalSample}
            contentLabel="ten-modal"
            onRequestClose={this.props.tenModalClear}
            >
                <h1>Ten Modal</h1>
                {this.props.tenModalSample && <p>{this.props.tenModalSample}</p>}
                <button onClick={this.props.tenModalClear}>OK</button>
            </Modal>
        )
    }
}

export default TenModal;