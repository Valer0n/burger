import React from "react";
import Modal from 'react-modal';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

class CustomModal extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         
    //     }
    // }
    render() {

        return (
            <Modal
                style={customStyles}
                isOpen={this.props.isOpen}
                onRequestClose={this.props.onShowHideModal}
            >

                <h2>Your order</h2>
                <div>{JSON.stringify(this.props.data.order)}</div>
                <button onClick={this.props.onShowHideModal}>close</button>

            </Modal>
        )
    }

}

export default CustomModal;