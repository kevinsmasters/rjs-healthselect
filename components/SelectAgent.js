import StandardList from '../components/StandardList'
import Button from 'react-bootstrap/Button'
import AgentStyles from '../styles/SelectAgent.module.css'

const SelectAgent = ({standards}) => {
    return (
        <>
            <h2>Select Additional Agents</h2>
            <p>Are there additional agents on your exclusion list?</p>
            <form action="" id="hst" className={AgentStyles.hstform}>
                <div className="row">
                    <div className="col-md-6">
                        <h3>Bacteria, mycoplasma, fungi</h3>
                        <StandardList standards={standards.bacmycofungi} />
                        <div className="form-check">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" id="allbac" />
                                Select all
                            </label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h3>Commensal microflora</h3>
                        <p><em>Exclusion of certain commensal microflora in this
                        section applies only to gnotobiotic health standards;
                        limited quantities of special purpose animals are produced
                        at these standards.</em></p>
                        <StandardList standards={standards.microflora} />
                        <div className="form-check">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" id="allmf" />
                                Select all
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-check">
                            <label htmlFor="allmf" className="form-check-label">
                                <input className="form-check-input" id="allmf" type="checkbox"/>
                                Select all
                            </label>
                            <div id="agentSearch">
                                <label htmlFor="agent">Can't find your agent? Try searching here.</label>
                                <br />
                                <input className="typeahead text-input" name="agent"
                                type="text" placeholder="agent" id="agentTxt"/>
                            </div>
                            <Button variant="primary">Submit</Button>
                            <Button variant="primary">Reset</Button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default SelectAgent
