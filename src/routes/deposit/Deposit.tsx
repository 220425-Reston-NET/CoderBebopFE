import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Customer } from '../../models/Customer';
import './Deposit.css'

function Deposit() {

    let userBalance : any = 0;
    let userID : any = 0;

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
        "http://codebebopp2project-env.eba-ag3aw5vp.us-east-1.elasticbeanstalk.com/api/Customer/GetAllCustomers?" +
          new URLSearchParams({
            p_balance: userBalance,
            p_ID: userID
          })
        
      )
        .then((response) => response.ok)
          .then((response => {

          console.log(response);

          test();

        }));
    }//end of onSubmit

    function test() {
    
      <div className="form-group col-md-4">
        <div>Deposit Successful!</div>;
        <div>Amount Deposited: {userBalance}</div>;
        <button type="submit" className="btn btn-primary"> <div onClick={goToLogin}>Go back to Login</div></button>;
      </div>
        
      };

      const navigate = useNavigate();
    const goToLogin = () => {
        navigate('/');
    };

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