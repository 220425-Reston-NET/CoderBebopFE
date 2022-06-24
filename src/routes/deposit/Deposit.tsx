import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Customer } from '../../models/Customer';
import './Deposit.css'

function Deposit() {

  let userBalance: any = 0;
  let userID: any = 0;

  const [customer, setcustomer] = useState({} as Customer);

  function GetBalance(e: any) {
    userBalance = e.target.value;
    console.log(userBalance);
  }

  function GetCustomerID(e: any) {
    userID = e.target.value;
    console.log(userID);
  }

  async function onSubmit(e: any) {
    e.preventDefault();

    await fetch(
      "http://codebebopp2project-env.eba-ag3aw5vp.us-east-1.elasticbeanstalk.com/api/CheckingAccount/Deposit?" +
      new URLSearchParams({
        p_balance: userBalance,
        p_ID: userID
      }),
      {
        method: 'PUT'
      }

    )
      .then((response) => response.ok)
      .then((response => {

        console.log(response);
      }));
  }//end of onSubmit

  const navigate = useNavigate();
  const goToChooseAccount = () => {
    navigate('/chooseaccount');
  };

  const goToLogin = () => {
    navigate('/');
  };

  return (
    <form className='deposit-container' onSubmit={onSubmit}>
      <h4>Welcome to the Deposit Page!</h4>
      <h6>Please insert amount you would like to deposit</h6>
      <div className="form-group col-md-4 ">
        <label htmlFor="inputName">Deposit Amount</label>
        <div>
          <input type="text" className="form-control" id="inputAddress" onChange={userBalance}/>
        </div>
      </div>
      <div>
        .
      </div>
      <h6>Please enter your SSN to confirm the deposit</h6>
      <div className="form-group col-md-4 ">
        <label htmlFor="inputPhoneNumber">SSN</label>
        <div style={{marginBottom:20}}>
          <input type="text" className="form-control" id="inputAddress" onChange={userID}/>
        </div>
        <div className="col-12">
                    <button type="submit" className="btn btn-primary"> <div>Submit</div></button>
                </div>
      </div>
      <div className="form-group col-md-4" style={{ marginTop: 20 }}>
        <h6>Amount Deposited: {userBalance}</h6>
        <h6>Thank you for banking with us. What would you like to do next?</h6>
        <button type="submit" className="btn btn-primary" style={{ marginTop: 20 }}> <div onClick={goToChooseAccount}>Continue Banking</div></button>
        <div><button type="submit" className="btn btn-primary" style={{ marginTop: 20 }}> <div onClick={goToLogin}>Exit</div></button></div>
      </div>
    </form>
  )
}

export default Deposit