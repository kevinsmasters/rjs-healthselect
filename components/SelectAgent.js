import StandardList from "../components/StandardList";
import Button from "react-bootstrap/Button";
import ResultModal from "../components/ResultModal";

import AgentStyles from "../styles/SelectAgent.module.css";

import React, { useState } from "react";

const SelectAgent = ({ standards }) => {
  const [agents, setAgents] = useState([]);

  const microfungi = standards.bacmycofungi;
  const microflora = standards.microflora;

  const [show, setShow] = useState(false);

  const checkCheck = (e, thisagent) => {
    if (e) {
      const result = microfungi.find(({ agent }) => agent === thisagent);
      if (result) {
        setAgents(agents.concat(result));
      } else {
        const result = microflora.find(({ agent }) => agent === thisagent);
        if (result) {
          setAgents(agents.concat(result));
        }
      }
    } else {
      setAgents(agents.filter((agent) => agent.agent != thisagent));
    }
  };

  const checkAll = (checked, type) => {
    if (checked) {
      setAgents(agents.concat(type));
    }
  };

  console.log("agents: ", agents);
  const handleShow = () => {
    console.log("show");
  };

  return (
    <>
      <h2>Select Additional Agents</h2>
      <p>Are there additional agents on your exclusion list?</p>
      <form action="" id="hst" className={AgentStyles.hstform}>
        <div className="row">
          <div className="col-md-6">
            <h3>Bacteria, mycoplasma, fungi</h3>
            <StandardList
              standards={standards.bacmycofungi}
              checkCheck={checkCheck}
              agents={agents}
            />
            <div className="form-check">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="allbac"
                  onChange={(e) => checkAll(e.target.checked, microfungi)}
                />
                Select all
              </label>
            </div>
          </div>
          <div className="col-md-6">
            <h3>Commensal microflora</h3>
            <p>
              <em>
                Exclusion of certain commensal microflora in this section
                applies only to gnotobiotic health standards; limited quantities
                of special purpose animals are produced at these standards.
              </em>
            </p>
            <StandardList
              standards={standards.microflora}
              checkCheck={checkCheck}
              agents={agents}
            />
            <div className="form-check">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="allmf"
                  onChange={(e) => checkAll(e.target.checked, microflora)}
                />
                Select all
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="form-check">
              <label htmlFor="nota" className="form-check-label">
                <input className="form-check-input" id="nota" type="checkbox" />
                I do not exclude any agents beyond the core list.
              </label>
              <div id="agentSearch">
                <label htmlFor="agent">
                  Can't find your agent? Try searching here.
                </label>
                <br />
                <input
                  className="typeahead text-input"
                  name="agent"
                  type="text"
                  placeholder="agent"
                  id="agentTxt"
                />
              </div>
              <Button variant="primary" onClick={() => setShow(true)}>
                Submit
              </Button>
              <ResultModal
                selectedAgents={agents}
                show={show}
                setShow={setShow}
              />
              <Button variant="secondary" onClick={() => setAgents([])}>
                Reset
              </Button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default SelectAgent;
