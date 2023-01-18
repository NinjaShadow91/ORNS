import React from 'react';
import PropTypes from 'prop-types';
import { Modal , Button} from 'react-bootstrap';

function ShowModal({doShow, handleModal, title, message}){
    return (
    <Modal show={doShow}
      onHide={()=>handleModal()}
      backdrop="static"
      keyboard={false}  
    >  
        <Modal.Header closeButton>
          <Modal.Title>
            {title}
          </Modal.Title>  
        </Modal.Header>  
        <Modal.Body><p>{message}</p></Modal.Body>  
        <Modal.Footer>  
          <Button onClick={()=>handleModal()}>Understood</Button> 
        </Modal.Footer>
    </Modal>
    )
}

ShowModal.propTypes = {
    doShow: PropTypes.bool.isRequired,
    handleModal: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
}

export default ShowModal;