import React from 'react'
import './Deposit.css'

function Deposit() {




  function onSubmit(e: any) {
    e.preventDefault();
    
    fetch("http://codebebopp2project-env.eba-ag3aw5vp.us-east-1.elasticbeanstalk.com/api/Customer/GetAllCustomers?+", {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {               
                
            }
            )
        });
      }

  return (
    <div className='deposit-container'>
    <h4>Enter amount you would like to deposit:</h4>
    <div className="input-group mb-3" style={{width: 600, marginTop: 20}}>
  <span className="input-group-text">$</span>
  <span className="input-group-text">0.00</span>
  <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)"/>
</div>
</div>
  )
}

export default Deposit