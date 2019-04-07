import React , {Component} from 'react';
import Modal from 'react-modal';
// import {getLS, setLS} from '../../utils/utils'

class XModal extends Component {

    LSSetClickHandler = () => {
        console.log("LSSET BTN CLICKED!")
        setLS();
    }
    LSGetClickHandler = () => {
        console.log("LSGET BTN CLICKED!")
        getLS();
    }
    render() {
        return (
            <Modal
            className="x-modal"
            isOpen={this.props.xModalOpen}
            onRequestClose={this.props.xModalSwitchClickHandler}
            contentLabel="xmodal"
            closeTimeoutMS={1500}
            overlayClassName="Overlay"
        >
            <p>xmodal</p>
            <button onClick={this.LSSetClickHandler} className="ls-set-btn">LS Set</button>
            <button onClick={this.LSGetClickHandler} className="ls-set-btn">LS Set</button>
            <button className="x-modal-close-btn" onClick={this.props.xModalSwitchClickHandler}>X</button>
        </Modal>
    
        )
    }
}

module.exports = XModal;