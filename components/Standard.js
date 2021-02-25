import React, { useState } from 'react';

const Standard = ({standard}) => {

    const [agent, setAgent] = useState(false);

    const checkCheck = (e) => {
        e.target.checked ? setAgent(standard.agent) : setAgent(false);
    }
    return(
        <div className="form-check">
            <label htmlFor={standard.agent} className="form-check-label">
                <input
                id={standard.agent}
                className="form-check-input standard-select"
                type="checkbox"
                value={standard.agent}
                onChange={checkCheck}
                />
                <span>{standard.name}</span>
            </label>
        </div>
    )
}

export default Standard
