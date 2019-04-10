import React, {Component} from 'react';
// import { connect } from 'react-redux';
// import VocabListItem from './VocabListItem';
// import selectVocabItems from '../reduxUtils/selectors/vocabSelectors';
import styled from 'styled-components';
import Modal from 'react-modal';


const Styled50Modal = styled.div`
    border: 1px solid white;
    width: 90vw;
    margin: 5vh auto;
    min-height: 80vh;
    height: auto;
    font-family: "Montserrat", 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-weight: 200;
    color: whitesmoke;
    display: grid;
`

class FiftyModal extends Component {
    componentWillMount() {
        // CODE FOUND HERE=> https://stackoverflow.com/questions/48269381/warning-react-modal-app-element-is-not-defined-please-use-modal-setappeleme
        //in order to avoid common `appElement={el}` warning
        Modal.setAppElement('body');
    }
    render(props) {
        return(
            <Modal 
            className="fifty-modal"
            isOpen={!!this.props.fiftyModalSample}
            contentLabel="fifty-modal"
            onRequestClose={this.props.fiftyModalClear}
            closeTimeoutMS={1500}
            overlayClassName="Overlay"
            >
            <Styled50Modal>
                <h1>50 Modal</h1>
                {this.props.fiftyModalSample && <p>{this.props.fiftyModalSample}</p>}
                <button className="cancel-modal-btn" onClick={this.props.fiftyModalClear}>OK</button>
            </Styled50Modal>
            </Modal>
        )
    }
}

export default FiftyModal;

/*

const MapStateToProps = (state) => {
    return {
        vocabItems: selectVocabItems(state.vocabItems, state.filters)
    }
}

export default connect(MapStateToProps)(beauplate)

*/