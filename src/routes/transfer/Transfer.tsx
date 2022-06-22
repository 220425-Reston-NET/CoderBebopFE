import React from 'react'
import './Transfer.css'

function Withdraw(){
    return (
    <>
        <h5>Please choose the account you are withdrawing from:</h5>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
            <label className="form-check-label" htmlFor="inlineRadio1">Checking</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
            <label className="form-check-label" htmlFor="inlineRadio2">Savings</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
            <label className="form-check-label" htmlFor="inlineRadio3">Money Market</label>
        </div>
        <h5>Please choose the account you are depositing to:</h5>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio1" value="option1"/>
            <label className="form-check-label" htmlFor="inlineRadio1">Checking</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio2" value="option2"/>
            <label className="form-check-label" htmlFor="inlineRadio2">Savings</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio3" value="option3"/>
            <label className="form-check-label" htmlFor="inlineRadio3">Money Market</label>
        </div>
        <div className="transfer-container">
            <label htmlFor="inputAddress">Please choosee the amount you want to transfer:</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="$$$" /*onChange={}*/ />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </>

    )
}

export default Withdraw