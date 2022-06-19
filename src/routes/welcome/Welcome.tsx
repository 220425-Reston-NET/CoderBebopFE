import React from 'react'
import './Welcome.css'


function Welcome() {

    return (
        <form>
            <div className="input-container login-container">
                <label htmlFor="inputCardNumber">Card Number</label>
                <input type="text" className="form-control" id="inputCardNumber" aria-describedby="emailHelp" placeholder="" />
            </div>
            <div className="input-container login-container">
                <label htmlFor="inputPIN">PIN</label>
                <input type="password" className="form-control" id="inputPIN" placeholder="" />
            </div>
            <button type="submit" className="btn btn-primary login-container">Submit</button>

            <div className='create-container'>
                <label htmlFor="inputCardNumber"><h2>No Account?</h2></label>
                <br></br>
                <br></br>
                <button type="submit" className="btn btn-primary">Create Account</button>
            </div>
        </form>
    )
}
export default Welcome