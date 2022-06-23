import React from 'react'
import './Transfer.css'

function Withdraw(){
    return (
    <div className="transfer-container">
        <h5>Please choose the account you are withdrawing from:</h5>
        <div className="form-check form-check-inline" style={{marginTop: 10}}>
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
            <label className="form-check-label" htmlFor="inlineRadio1">Checking</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
            <label className="form-check-label" htmlFor="inlineRadio2">Savings</label>
        </div>
        <div className="form-check form-check-inline" style={{marginBottom: 20}}>
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
            <label className="form-check-label" htmlFor="inlineRadio3">Money Market</label>
        </div>
        <h5>Please choose the account you are depositing to:</h5>
        <div className="form-check form-check-inline" style={{marginTop: 10}}>
            <input className="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio1" value="option1"/>
            <label className="form-check-label" htmlFor="inlineRadio1">Checking</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio2" value="option2"/>
            <label className="form-check-label" htmlFor="inlineRadio2">Savings</label>
        </div>
        <div className="form-check form-check-inline" style={{marginBottom: 20}}>
            <input className="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio3" value="option3"/>
            <label className="form-check-label" htmlFor="inlineRadio3">Money Market</label>
        </div>
        <h5>Please choose the amount you want to transfer:</h5>
        <div>
            <label htmlFor="inputAddress"></label>
            <input type="text" className="form-control" id="inputAddress" placeholder="$$$" /*onChange={}*/ />
        </div>
        <button type="submit" className="btn btn-primary" style={{marginTop: 20}}>Submit</button>
    </div>

    )
}

export default Withdraw