import React from 'react'
import './ChooseAccount.css'

function DepositWithdraw() {
  return (
    <form className='chooseaccount'>
      <h1>Which account would you like to access?</h1>
      <div className='container'>
        <button type="button" className="btn btn-primary btn-lg rightmarg">Checking</button>
        <button type="button" className="btn btn-secondary btn-lg rightmarg">Savings</button>          
        <button type="button" className="btn btn-primary btn-lg">Money Market</button>
      </div>

      <div className='container'>
        <button type="button" className="btn btn-primary btn-lg">Back</button>
      </div>
    </form>
  )
}

export default DepositWithdraw