import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Mainmenu.css'

function Mainmenu() {

  const navigate = useNavigate();
    const goToDeposit = () => {
        navigate('/deposit');
    };

    const goToWithdraw = () => {
        navigate('/withdraw');
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
    
    <body>
    <form className='mainmenu'>
      <h1><b>What would you like to do?</b></h1>
      <div className='container' style ={{marginTop:'2rem'}}>
        <button type="button" data-testid="deposit-btn" className="btn btn-primary btn-lg rightmarg"><div onClick={goToDeposit}>Deposit</div></button>
        <button type="button" data-testid="withdraw-btn" className="btn btn-primary btn-lg rightmarg"><div onClick={goToWithdraw}>Withdraw</div></button>
        <button type="button" data-testid="view-btn" className="btn btn-primary btn-lg rightmarg"><div onClick={goToViewBalance}>View Balance</div></button>           
        <button type="button" data-testid="transfer-btn" className="btn btn-primary btn-lg rightmarg"><div onClick={goToTransfer}>Transfer</div></button>
      </div>

      <div className='container' style ={{marginTop:'2rem'}}>
        <button type="button" className="btn btn-primary btn-lg"><div onClick={goToChooseAccount}>Back</div></button>
      </div>
    </form>
    </body>
  )
}

export default Mainmenu