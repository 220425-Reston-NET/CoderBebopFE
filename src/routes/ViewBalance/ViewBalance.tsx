import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Balance } from '../../models/Balance';

function ViewBalance() {

    let CaccID : any = 0;

    const [balance, setbalance ] = useState({} as Balance);
    const [isHidden, setHidden] = useState(false);
    const [isSuccess, setSuccess] = useState(false);

    function getID(e:any)
    {
        CaccID = e.target.value
        if(CaccID<0)
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
          "http://codebebopp2project-env.eba-ag3aw5vp.us-east-1.elasticbeanstalk.com/api/CheckingAccount/ViewBalance?" +
            new URLSearchParams({
              c_ID: CaccID
              
            })
          
        )
          .then((response) => response.json())
            .then((response => {
            // change/ attached user to user id in db
            setbalance(response);
            setSuccess(true)

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
      <h4><b>Welcome to the Checking View Balance Page!</b></h4>
      <h6>Please insert your SSN to get your balance</h6>
      <div className="form-group col-md-4 ">
        <label htmlFor="inputName"><b>SSN</b></label>
        <div>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            onChange={getID}
          />
          {
            isHidden && <span style={{color:'red'}}>Cannot Input negative SSN</span>
          }
        </div>
        <button type="submit" className="btn btn-primary" disabled ={isHidden}>
            {" "}
            <div>Submit</div>
          </button>
      </div>
      </form>
      {
        isSuccess &&
        <div className="transfer-container" style ={{marginTop:'-2rem'}}
        >
          <h6>User Found! Displaying account information.</h6>
        Name : {balance.cName}
          <div>

          Account Type : {balance.cAccType}
          </div>
            <div>
                Balance : ${balance.cAccBalance}
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

export default ViewBalance