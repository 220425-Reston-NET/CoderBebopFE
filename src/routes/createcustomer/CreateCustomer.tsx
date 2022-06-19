import React from 'react'
import './CreateCustomer.css'


function CreateCustomer() {
    return (
        <form className='createcustomer-container'>
            <div className="form-group col-md-4 ">
                <label htmlFor="inputName">Name</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="John Doe" />
                <label htmlFor="inputEmail">Email</label>
                <input type="text" className="form-control" id="inputEmail" placeholder="johndoe@ymail.com" />
            </div>
            <div className="form-group col-md-4">
                <label htmlFor="inputAddress">Address</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
           
                <div className="form-group col-md-4">
                    <label htmlFor="inputCity">City</label>
                    <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputState">State</label>
                    <select id="inputState" className="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputZip">Zip</label>
                    <input type="text" className="form-control" id="inputZip" />
                </div>
         
            
                <div className="form-group col-md-4">
                    <label htmlFor="inputCardNumber">Card Number</label>
                    <input type="text" className="form-control" id="inputCardNumber" aria-describedby="emailHelp" placeholder="" />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputPIN">PIN</label>
                    <input type="password" className="form-control" id="inputPIN" placeholder="" />
                </div>
                <br></br>
            
            <div className="form-group">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                    <label className="form-check-label" htmlFor="gridCheck">
                        Checking
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                    <label className="form-check-label" htmlFor="gridCheck">
                        Savings
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                    <label className="form-check-label" htmlFor="gridCheck">
                        Money
                    </label>
                </div>
            </div>
            <br></br>
            <button type="submit" className="btn btn-primary">Create Account</button>
        </form>
    )
}

export default CreateCustomer