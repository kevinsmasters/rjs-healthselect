const Standard = ({standard, onChange, selected}) => {

    let standClass = "form-check-input standard-select " + standard.type;

    return(
        <div className="form-check">
            <label htmlFor={standard.agent} className="form-check-label">
                <input
                id={standard.agent}
                className={standClass}
                type="checkbox"
                checked={selected}
                onChange={(e)=>onChange(e.target.checked, standard.agent)}
                />
                <span>{standard.name}</span>
            </label>
        </div>
    )
}

export default Standard
