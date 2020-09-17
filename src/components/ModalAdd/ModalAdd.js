
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FormControlAddTour from '../FormControlAddTour/FormControlAddTour'

const ModalAdd = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const toggle = () => setModal(!modal);

  const [modal, setModal] = useState(false);
  const [state, setState] = useState('');

  return (
    <div >
      <Button color='info' onClick={toggle}>{buttonLabel}</Button>
      <Modal  isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Добавить тур</ModalHeader>
        <ModalBody >
          <FormControlAddTour/>
        </ModalBody>
        {/* <ModalFooter>
          <Button color="secondary" onClick={toggle}>Отменить</Button>
        </ModalFooter> */}
      </Modal>
    </div>
  );
}

export default ModalAdd;