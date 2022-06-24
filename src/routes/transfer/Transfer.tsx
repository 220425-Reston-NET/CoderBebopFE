import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Transfer.css'

function Transfer(){

    let userBalance: any = 0;
  let userID: any = 0;

  function GetBalance(e: any) {
    userBalance = e.target.value;
    console.log(userBalance);
  }

  function GetCustomerID(e: any) {
    userID = e.target.value;
    console.log(userID);
  }

    async function onSubmitsw(e: any) {
        e.preventDefault();
    
        await fetch(
          "http://codebebopp2project-env.eba-ag3aw5vp.us-east-1.elasticbeanstalk.com/api/SavingsAccount/Withdraw?" +
            new URLSearchParams({
              p_balance: userBalance,
              p_ID: userID,
            }),
          {
            method: "PUT",
          }
        )
          .then((response) => response.ok)
          .then((response) => {
            console.log(response);
          });
      } //end of onSubmit

    async function onSubmitcw(e: any) {
        e.preventDefault();
    
        await fetch(
          "http://codebebopp2project-env.eba-ag3aw5vp.us-east-1.elasticbeanstalk.com/api/CheckingAccount/Withdraw?" +
            new URLSearchParams({
              p_balance: userBalance,
              p_ID: userID,
            }),
          {
            method: "PUT",
          }
        )
          .then((response) => response.ok)
          .then((response) => {
            console.log(response);
          });
      } //end of onSubmit

    async function onSubmitsd(e: any) {
        e.preventDefault();
    
        await fetch(
          "http://codebebopp2project-env.eba-ag3aw5vp.us-east-1.elasticbeanstalk.com/api/SavingsAccount/Deposit?" +
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

    async function onSubmitcd(e: any) {
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
      const goToLogin = () => {
        navigate("/chooseaccount");
      };
    
      const LeaveBank = () => {
        navigate("/");
      };

    

    return (
    <div className="transfer-container">
        <h3>Welcome to the Transfer Page!</h3>
        <div>
            <br></br>
        </div>
        <h5>Please choose the amount you want to transfer:</h5>
        <div>
            <label htmlFor="inputAddress"></label>
            <input type="text" className="form-control" id="inputAddress" placeholder="$$$" onChange={GetBalance} />
        </div>
        <h5>Please enter your SSN to confirm transfer:</h5>
        <div>
            <label htmlFor="inputAddress"></label>
            <input type="text" className="form-control" id="inputAddress"  onChange={GetCustomerID} />
        </div>
        <h5>Please choose the account you are withdrawing from:</h5>
        <div className="form-check form-check-inline" style={{marginTop: 10}}>
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" onChange={onSubmitcw}/>
            <label className="form-check-label" htmlFor="inlineRadio1">Checking</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" onChange={onSubmitsw}/>
            <label className="form-check-label" htmlFor="inlineRadio2">Savings</label>
        </div>
        <div className="form-check form-check-inline" style={{marginBottom: 20}}>
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
            <label className="form-check-label" htmlFor="inlineRadio3">Money Market</label>
        </div>
        <h5>Please choose the account you are depositing to:</h5>
        <div className="form-check form-check-inline" style={{marginTop: 10}}>
            <input className="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio1" value="option1" onChange={onSubmitcd}/>
            <label className="form-check-label" htmlFor="inlineRadio1">Checking</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio2" value="option2" onChange={onSubmitsd}/>
            <label className="form-check-label" htmlFor="inlineRadio2">Savings</label>
        </div>
        <div className="form-check form-check-inline" style={{marginBottom: 20}}>
            <input className="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio3" value="option3"/>
            <label className="form-check-label" htmlFor="inlineRadio3">Money Market</label>
        </div>
        <div>
        <h6>Thank you for banking with us! What would you like to do next?</h6>
        <button type="submit" className="btn btn-primary" style={{ marginTop: 20 }}> <div onClick={goToLogin}>Continue Banking</div></button>
        <div><button type="submit" className="btn btn-primary" style={{ marginTop: 20 }}> <div onClick={LeaveBank}>Exit</div></button></div>
      </div>
    </div>

    )
}

export default Transfer