import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Transfer.css'

function Transfer(){

    let userBalance: any = 0;
  let userID: any = 0;

  const [isHidden, setHidden] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [isSuccess1, setSuccess1] = useState(false);

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
            setSuccess(true)
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
            setSuccess(true)
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
            setSuccess1(true)
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
            setSuccess1(true)
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
    <div className="transfer-container"style ={{marginTop:'.5rem'}}>
        <h3><b>Welcome to the Transfer Page!</b></h3>
        <div> 
            <br></br>
        </div>
        <div style ={{marginTop:'-1.5rem'}}>
        <h5><b>Please choose the amount you want to transfer:</b></h5>
        </div>
        <div>
            <label htmlFor="inputAddress"> </label>
            <input type="number" className="form-control" id="inputAddress" placeholder="$$$" onChange={GetBalance} style ={{marginTop:'-1.5rem'}}/>
            {
              isHidden && <span style={{color:'red'}}>Cannot input negative money</span>
            }
        </div>
        <h5><b>Please enter your SSN to confirm transfer:</b></h5>
        <div>
            <label htmlFor="inputAddress"></label>
            <input type="number" className="form-control" id="inputAddress"  onChange={GetCustomerID} style ={{marginTop:'-1.5rem'}}/>
            {
              isHidden && <span style={{color:'red'}}>Cannot input negative money</span>
            }
        </div>
        <h5><b>Please choose the account you are withdrawing from:</b></h5>
        <div className="form-check form-check-inline" style={{marginTop: '0rem'}}>
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" onChange={onSubmitcw}/>
            {
              isSuccess && <span>Your Withdraw was recorded! Please select which account to deposit from</span>
            }
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
        <div style ={{marginTop:'-1rem'}}></div>
        <h5><b>Please choose the account you are depositing to:</b></h5>
      
        <div className="form-check form-check-inline" style={{marginTop: '0rem'}}>
            <input className="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio1" value="option1" onChange={onSubmitcd}/>
            <label className="form-check-label" htmlFor="inlineRadio1">Checking</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio2" value="option2" onChange={onSubmitsd}/>
            {
              isSuccess1 && <span>Your transfer to Savings</span>
            }
            <label className="form-check-label" htmlFor="inlineRadio2">Savings</label>
        </div>
        <div className="form-check form-check-inline" style={{marginBottom: 20}}>
            <input className="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio3" value="option3"/>
            <label className="form-check-label" htmlFor="inlineRadio3">Money Market</label>
        </div>
        <div>
        <div style ={{marginTop:'-1rem'}}></div>
        <h6>"Thank you for banking with us! What would you like to do next?"</h6>
        <button type="submit" className="btn btn-primary" style={{ marginTop: 20 }}> <div onClick={goToLogin}>Continue Banking</div></button>
        <div><button type="submit" className="btn btn-primary" style={{ marginTop: 20 }}> <div onClick={LeaveBank}>Exit</div></button></div>
      </div>
    </div>

    )
}

export default Transfer