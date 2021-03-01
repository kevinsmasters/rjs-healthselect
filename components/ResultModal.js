import React, { useState } from 'react';

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const ResultModal = ({selectedAgents}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
          <Button variant="primary" onClick={handleShow}>
            Submit
          </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!
                    <ul>
                        {selectedAgents.map(agent => (
                            <li key={agent}>{agent}</li>
                        ))}
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
          </>
    )
}

export default ResultModal
