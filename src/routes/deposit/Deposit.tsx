import React from 'react'
import './Deposit.css'

function Deposit() {
  return (
    <div>
      <div className="input-group mb-3">
        <span className="input-group-text">$</span>
        <span className="input-group-text">0.00</span>
        <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)"/>
      </div>
    </div>
  )
}

export default Deposit