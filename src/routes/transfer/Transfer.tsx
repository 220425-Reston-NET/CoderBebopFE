import React from 'react'
import './Transfer.css'

function Withdraw(){
    return (
    <>
    <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
        <label className="form-check-label" htmlFor="inlineCheckbox1">Checking</label>
    </div>
    <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
        <label className="form-check-label" htmlFor="inlineCheckbox2">Savings</label>
    </div>
    <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
        <label className="form-check-label" htmlFor="inlineCheckbox3">Money Market</label>
    </div>

    <button type="button" className="btn btn-primary btn-lg">Back</button>
    <button type="button" className="btn btn-primary btn-lg">Continue</button>
    </>
    )
}

export default Withdraw