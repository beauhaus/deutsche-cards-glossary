import React from 'react';
import Modal from 'react-modal';

const XModal = (props) => (
    <Modal
        className="xmodal"
        isOpen={props.xModalOpen}
        onRequestClose={props.xModalSwitchClickHandler}
        contentLabel="xmodal"
    >
        <p>xmodal</p>
        <button onClick={props.xModalSwitchClickHandler}>X</button>
    </Modal>
);

module.exports = XModal;