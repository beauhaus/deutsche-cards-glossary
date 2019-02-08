import React, { Component } from 'react';
import Modal from 'react-modal';

const XModal = (props) => (
    <Modal
        className="xmodal"
        isOpen={props.xModalOpen}
        contentLabel="xmodal"
    >
        <p>xmodal</p>
        <button onClick={props.xModalSwitchClickHandler}>X</button>
    </Modal>
);

module.exports = XModal;