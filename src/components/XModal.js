import React, { Component } from 'react';
import Modal from 'react-modal';

const XModal = (props) =>  (
    
        <Modal className="xmodal"
        isOpen={props.openModal}
        contentLabel="xmodal"
        
        >
            <p>xmodal</p>
        </Modal>
    );


module.exports = XModal;