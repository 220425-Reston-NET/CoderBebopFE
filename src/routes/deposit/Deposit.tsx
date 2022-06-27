import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Customer } from '../../models/Customer';
import './Deposit.css'

function Deposit() {

  let userBalance: any;
  let userID: any ;

  const [isHidden, setHidden] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  

  function GetBalance(e: any) {
    userBalance = e.target.value;
    console.log(userBalance);
    if(userBalance<0)
    {
      setHidden(true);
    }
    else
    {
      setHidden(false);
    }
  }

  function GetCustomerID(e: any) {
    userID = e.target.value;
    console.log(userID);
    if(userID<0)
    {
      setHidden(true)
    }
    else{
      setHidden(false)
    }
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

        setSuccess(true)

        console.log(response);
      }));
  }//end of onSubmit

  function test(){
    console.log("Deposit Successful!")
  }

  const navigate = useNavigate();
  const goToChooseAccount = () => {
    navigate('/chooseaccount');
  };

  const goToLogin = () => {
    navigate('/');
  };

  return (
    <div>
    <form className='deposit-container' onSubmit={onSubmit}>
      <div className="transfer-container"style ={{marginTop:'-7rem'}}></div>
      <h4><b>Welcome to the Checking Deposit Page!</b></h4>
      <h6>Please insert amount you would like to deposit:</h6>
      <div className="form-group col-md-4 ">
        <label htmlFor="inputName"><b>Deposit Amount</b></label>
        <div>
          <input type="text" className="form-control" id="inputAddress" onChange={GetBalance}/>
          {
            isHidden && <span style={{color:'red'}}>Cannot input negative money</span>
          }
        </div>
      </div>
      <div>
        .
      </div>
      <h6>Please enter your SSN to confirm the deposit:</h6>
      <div className="form-group col-md-4 ">
        <label htmlFor="inputPhoneNumber"><b>SSN</b></label>
        <div style={{marginBottom:20}}>
          <input type="text" className="form-control" id="inputAddress" onChange={GetCustomerID}/>
          {
            isHidden && <span style={{color:'red'}}>Cannot input negative SSN</span>
          }
        </div>
        <div className="col-12">
                    <button type="submit" className="btn btn-primary" onClick={test} disabled={isHidden}> <div>Submit</div></button>
                </div>
      </div>
      
    </form>
    {
      isSuccess &&
      <div className="transfer-container" style ={{marginTop:'2rem'}}>
        <h4>Your Deposit was successful! Check your balance for confirmation of deposit</h4>
        <h5>Thank you for banking with us. What would you like to do next?</h5>
        <button type="submit" className="btn btn-primary" style={{ marginTop: 20 }}> <div onClick={goToChooseAccount}>Continue Banking</div></button>
        <div><button type="submit" className="btn btn-primary" style={{ marginTop: 20 }}> <div onClick={goToLogin}>Exit</div></button></div>
      </div>
    }
    </div>
  )
}

export default Deposit