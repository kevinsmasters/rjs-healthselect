const Standard = ({standard, onChange}) => {

    return(
        <div className="form-check">
            <label htmlFor={standard.agent} className="form-check-label">
                <input
                id={standard.agent}
                className="form-check-input standard-select"
                type="checkbox"
                onChange={(e)=>onChange(e.target.checked, standard.agent)}
                />
                <span>{standard.name}</span>
            </label>
        </div>
    )
}

export default Standard
