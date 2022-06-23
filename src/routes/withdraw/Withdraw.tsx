import React from 'react'
import './Withdraw.css'

function Withdraw() {
  return (
    <div className='withdraw-container'>
    <h4>Enter amount you would like to withdraw:</h4>
    <div className="input-group mb-3" style={{width: 600, marginTop: 20}}>
  <span className="input-group-text">$</span>
  <span className="input-group-text">0.00</span>
  <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)"/>
</div>
</div>
  )
}

export default Withdraw