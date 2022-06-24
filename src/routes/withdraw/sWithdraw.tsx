import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Withdraw.css";

export default function SWithdraw() {
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

  async function onSubmit(e: any) {
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

  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/chooseaccount");
  };

  const LeaveBank = () => {
    navigate("/");
  };

  return (
    <form className="createcustomer-container" onSubmit={onSubmit}>
      <h4>Welcome to the Savings Withdraw Page!</h4>
      <h6>Please insert amount you would like to withdraw</h6>
      <div className="form-group col-md-4 ">
        <label htmlFor="inputName">$Withdraw Amount</label>
        <div>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            onChange={GetBalance}
          />
        </div>
      </div>
      <div>
        <br></br>
      </div>
      <h6>Please enter your SSN to confirm the withdraw</h6>
      <div className="form-group col-md-4 ">
        <label htmlFor="inputPhoneNumber">SSN</label>
        <div>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            onChange={GetCustomerID}
          />
          <div>
            <br></br>
          </div>
          <button type="submit" className="btn btn-primary">
            {" "}
            <div>Submit</div>
          </button>
          <div>
            <br></br>
          </div>

        <div>
        <h6>Thank you for banking with us! What would you like to do next?</h6>
        <button type="submit" className="btn btn-primary" style={{ marginTop: 20 }}> <div onClick={goToLogin}>Continue Banking</div></button>
        <div><button type="submit" className="btn btn-primary" style={{ marginTop: 20 }}> <div onClick={LeaveBank}>Exit</div></button></div>
      </div>
        </div>
      </div>
    </form>
  );
}
