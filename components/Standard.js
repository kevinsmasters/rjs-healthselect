const Standard = ({ standard, checkCheck, agents }) => {
  let standClass = "form-check-input standard-select " + standard.type;
  const checkMe = agents.includes(standard);

  console.log("check? ", checkMe);
  //   {if (agents.includes(standard)) {
  //     checked
  //   }}

  return (
    <div className="form-check">
      <label htmlFor={standard.agent} className="form-check-label">
        <input
          id={standard.agent}
          className={standClass}
          type="checkbox"
          onChange={(e) => checkCheck(e.target.checked, standard.agent)}
          checked={checkMe}
        />
        <span>{standard.name}</span>
      </label>
    </div>
  );
};

export default Standard;
