import React, { Component } from 'react';
import ShowModal from '../../components/ShowModal';
import * as ROUTES from '../../constants/routes';

export default class ShowModalContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { doShow: props.doShow };
        this.state = { title : props.modalTitle};
        this.state = { message : props.modalMessage};
    }

    handleModal = e => {
        console.log("in handleModal");
        window.setTimeout(function(){ window.location = ROUTES.JOBS; },2000);
  };

    render(){
        console.log("in handleModal render");
        // const {doShow, modalTitle, modalMessage} = this.state;
        const doShow=true;
        const modalTitle="check";
        const modalMessage="check messaage";
        this.handleModal();
        return (
            <ShowModal doShow={doShow} handleModal={this.handleModal} title={modalTitle} message={modalMessage} />
        );
    }
}