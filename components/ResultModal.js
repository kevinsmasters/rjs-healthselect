import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ResultModal = ({ selectedAgents }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  var lowest = Number.POSITIVE_INFINITY;
  var highest = Number.NEGATIVE_INFINITY;
  var standKey = [];

  let selectLen = selectedAgents.length;
  for (let i = 0; i < selectLen; i++) {
    if (selectedAgents[i].standards.length < lowest)
      lowest = selectedAgents[i].standards.length;
    if (selectedAgents[i].standards.length == lowest)
      standKey = selectedAgents[i].standards;
  }
  console.log(standKey);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your exclusion list
          <ul>
            {selectedAgents.map((agent) => (
              <li key={agent.agent}>{agent.name}</li>
            ))}
          </ul>
          is excluded from the following Taconic health standards:
          <ul>
            {standKey.map((stand) => (
              <li key={stand}>{stand}</li>
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
  );
};

export default ResultModal;
