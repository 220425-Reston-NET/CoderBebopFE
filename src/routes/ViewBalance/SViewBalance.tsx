import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { SBalance } from '../../models/SBalance';

function SViewBalance() {


    const [balance, setbalance ] = useState({} as SBalance);

    const [isHidden, setHidden] = useState(false);
    const [isSuccess, setSuccess] = useState(false);

    function getID(e:any)
    {
        balance.sAccID = e.target.value

        if (balance.sAccID < 0)
        {
            setHidden(true);
        }
        else
        {
            setHidden(false);
        }
    }

    async function onSubmit(e: any) {
        e.preventDefault();
    
        await fetch(
          "http://codebebopp2project-env.eba-ag3aw5vp.us-east-1.elasticbeanstalk.com/api/SavingsAccount/ViewBalance?" +
            new URLSearchParams({
              c_ID: balance.sAccID+""
              
            })
          
        )
          .then((response) => response.json())
            .then((response => {
            // change/ attached user to user id in db
            setbalance(response);
            setSuccess(true);

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
    <div>
    <form className="createcustomer-container" onSubmit={onSubmit}>
      <div className="transfer-container"style ={{marginTop:'-4rem'}}></div>
      <h4><b>Welcome to the Savings View Balance Page!</b></h4>
      <h6>Please insert your SSN to get your balance</h6>
      <div className="form-group col-md-4 ">
        <label htmlFor="inputName"><b>SSN</b></label>
        <div>
          <input
            type="number"
            min='0'
            className="form-control"
            id="inputAddress"
            onChange={getID}
          />
          {
            isHidden && <span style={{color:'red'}}>Cannot Input negative SSN</span>
          }
        </div>
        <button type="submit" className="btn btn-primary" disabled={isHidden}>
            {" "}
            <div>Submit</div>
          </button>
      </div>
      </form>
      {
        isSuccess &&
        <div className="transfer-container" style ={{marginTop:'-2rem'}}>
            <div>
                <h6>User Found! Displaying account information</h6>
            </div>
      <div>
        Name : {balance.sName}
        </div>
            Account Type : {balance.sAccType}
            <div>
                Balance : ${balance.sAccBalance}
      </div>
            <div>
              Thank you for banking with us! What would you like to do next?
            </div>
            <div className="transfer-container"style ={{marginTop:'.5rem'}}></div>
            <button type="submit" className="btn btn-primary">
              {" "}
              <div onClick={goToLogin}>Continue Banking </div>
            </button>
            <div className="transfer-container"style ={{marginTop:'.5rem'}}></div>
            <br></br>
            <button type="submit" className="btn btn-primary">
              {" "}
              <div onClick={LeaveBank}>Exit ATM</div>
            </button>
            </div>
        }
      </div>
  )


 
}

export default SViewBalance