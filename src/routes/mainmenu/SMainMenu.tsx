import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function SMainMenu() {

  const navigate = useNavigate();
    const goToDeposit = () => {
        navigate('/sdeposit');
    };

    const goToWithdraw = () => {
        navigate('/swithdraw');
    };

    const goToTransfer = () => {
      navigate('/transfer');
  };
  const goToViewBalance = () => {
      navigate('/ViewBalance');
  };
    
  const goToChooseAccount = () => {
    navigate('/chooseaccount');
};

  return (
    <form className='mainmenu'>
      <h1>What would you like to do?</h1>
      <div className='container'>
        <button type="button" className="btn btn-primary btn-lg rightmarg"><div onClick={goToDeposit}>Deposit</div></button>
        <button type="button" className="btn btn-primary btn-lg rightmarg"><div onClick={goToWithdraw}>Withdraw</div></button>
        <button type="button" className="btn btn-primary btn-lg rightmarg"><div onClick={goToViewBalance}>View Balance</div></button>           
        <button type="button" className="btn btn-secondary btn-lg" disabled><div onClick={goToTransfer}>Transfer</div></button>
      </div>

      <div className='container'>
        <button type="button" className="btn btn-primary btn-lg"><div onClick={goToChooseAccount}>Back</div></button>
      </div>
    </form>
  )
}
