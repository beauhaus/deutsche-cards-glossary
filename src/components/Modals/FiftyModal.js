import React, {Component} from 'react';
// import { connect } from 'react-redux';
// import VocabListItem from './VocabListItem';
// import selectVocabItems from '../reduxUtils/selectors/vocabSelectors';

import Modal from 'react-modal';


class FiftyModal extends Component {
    componentWillMount() {
        // CODE FOUND HERE=> https://stackoverflow.com/questions/48269381/warning-react-modal-app-element-is-not-defined-please-use-modal-setappeleme
        //in order to avoid common `appElement={el}` warning
        Modal.setAppElement('body');
    }
    render(props) {
        return(
            <Modal 
            className="ten-modal"
            isOpen={!!this.props.fiftyModalSample}
            contentLabel="ten-modal"
            onRequestClose={this.props.fiftyModalClear}
            >
                <h1>Ten Modal</h1>
                {this.props.fiftyModalSample && <p>{this.props.fiftyModalSample}</p>}
                <button onClick={this.props.fiftyModalClear}>OK</button>
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