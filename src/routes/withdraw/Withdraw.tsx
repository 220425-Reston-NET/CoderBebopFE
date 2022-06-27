import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Withdraw.css";

function Withdraw() {
  let userBalance: any = 0;
  let userID: any = 0;

  const [isHidden, setHidden] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  function GetBalance(e: any) {
    userBalance = e.target.value;
    console.log(userBalance);
    if(userBalance<0)
    {
      setHidden(true)
    }
    else
    {
      setHidden(false)
    }
  }

  function GetCustomerID(e: any) {
    userID = e.target.value;
    console.log(userID);
    if(userID<0)
    {
      setHidden(true)
    }
    else
    {
      setHidden(false)
    }
  }

  async function onSubmit(e: any) {
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
        setSuccess(true);
      });
  } //end of onSubmit

  function test(){
    console.log("Withdraw Successful!")
  }

  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/chooseaccount");
  };

  const LeaveBank = () => {
    navigate("/");
  };

  return (
    <div>
    <form className="createcustomer-container" onSubmit={onSubmit}>
      <div className="transfer-container"style ={{marginTop:'-4rem'}}></div>
      <h4><b>Welcome to the Checking Withdraw Page!</b></h4>
      <h6>Please insert amount you would like to withdraw:</h6>
      <div className="form-group col-md-4 ">
        <label htmlFor="inputName"><b>Withdraw Amount</b></label>
        <div>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            onChange={GetBalance}
          />
          {
            isHidden && <span style={{color:'red'}}>Cannot input negative money</span>
          }
        </div>
      </div>
      <div>
        <br></br>
      </div>
      <h6>Please enter your SSN to confirm the withdraw:</h6>
      <div className="form-group col-md-4 ">
        <label htmlFor="inputPhoneNumber"><b>SSN</b></label>
        <div>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            onChange={GetCustomerID}
          />
          {
            isHidden && <span style={{color:'red'}}>Cannot input negative SSN</span>
          }
          <div>
            <br></br>
          </div>
          <button type="submit" className="btn btn-primary" onClick={test}>
            {" "}
            <div>Submit</div>
          </button>

          <div>
            <br></br>
          </div>

        </div>
      </div>
    </form>
    {
      isSuccess &&
      <div className="transfer-container" style ={{marginTop:'-1rem'}}>
        <h4>Your Withdraw was successful! Check your balance for confirmation of Withdraw</h4>
        <h5>Thank you for banking with us. What would you like to do next?</h5>
        <button type="submit" className="btn btn-primary" style={{ marginTop: 20 }}> <div onClick={goToLogin}>Continue Banking</div></button>
        <div><button type="submit" className="btn btn-primary" style={{ marginTop: 20 }}> <div onClick={LeaveBank}>Exit</div></button></div>
      </div>
    }
    </div>

  );
}

export default Withdraw;
