import React from 'react'
import './Welcome.css'


function Welcome() {

    return (
        <form className="welcome-container">
            <div className="input-container">
            <label htmlFor="inputCardNumber" className='topmarg'><h2>Login</h2></label>
                <div>
                <label htmlFor="loginlabel" className='topmarg'>Card Number</label>
                <input type="text" className="form-control" id="inputCardNumber" aria-describedby="emailHelp" placeholder="" />
                </div>
                <div>
                <label htmlFor="inputPIN" className='topmarg'>PIN</label>
                <input type="password" className="form-control" id="inputPIN" placeholder="" />
                </div>
                <div>
                <button type="submit" className="btn btn-primary topmarg">Submit</button>
                </div>
            </div>
                

            <div className='create-container'>
                <label htmlFor="buttonlabel" className='topmarg'><h2>No Account?</h2></label>
                <br></br>
                <br></br>
                <button type="submit" className="btn btn-primary">Create Account</button>
            </div>
        </form>
    )
}
export default Welcome