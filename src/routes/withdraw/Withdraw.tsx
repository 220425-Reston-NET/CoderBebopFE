import React from 'react'
import './Withdraw.css'

function Withdraw() {





  return (
    
     <form className='createcustomer-container' >
      <h4>Welcome to the Withdraw Page!</h4>
      <h6>Please insert amount you would like to withdraw</h6>
            <div className="form-group col-md-4 ">
                <label htmlFor="inputName">$Withdraw Amount</label>
                <div>
                    <input type="text" className="form-control" id="inputAddress" />
                </div>
            </div>
            <div>
              .
            </div>
      <h6>Please enter your SSN to confirm the withdraw</h6>
            <div className="form-group col-md-4 ">
                <label htmlFor="inputPhoneNumber">SSN</label>
                <div>
                    <input type="text" className="form-control" id="inputAddress" />
                </div>
            </div>
      </form>
  )
}

export default Withdraw