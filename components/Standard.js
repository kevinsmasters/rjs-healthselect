
const Standard = ({standard}) => {
    return(
        <div className="form-check">
            <label htmlFor={standard.agent} className="form-check-label">
                <input id={standard.agent} className="form-check-input standard-select" type="checkbox"/>
                <span>{standard.name}</span>
            </label>
        </div>
    )
}

export default Standard
