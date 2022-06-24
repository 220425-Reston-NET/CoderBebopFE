import React from 'react'
import { useNavigate } from 'react-router-dom';
import './ChooseAccount.css'

function DepositWithdraw() {

  const navigate = useNavigate();
    const goToMainMenu = () => {
        navigate('/mainmenu');
    };
    const goToLogin = () => {
        navigate('/');
    };

  return (
    <form className='chooseaccount'>
      <h1>Which account would you like to access?</h1>
      <div className='container'>
        <button type="button" className="btn btn-primary btn-lg rightmarg" onClick={goToMainMenu}>Checking</button>
        <button type="button" className="btn btn-secondary btn-lg rightmarg" onClick={goToMainMenu}>Savings</button>          
        <button type="button" className="btn btn-primary btn-lg" onClick={goToMainMenu}>Money Market</button>
      </div>

      <div className='container'>
        <button type="button" className="btn btn-primary btn-lg" onClick={goToLogin}>Exit</button>
      </div>
    </form>
  )
}

export default DepositWithdraw