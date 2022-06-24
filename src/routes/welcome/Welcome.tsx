import React, { useEffect, useState } from 'react'
import './Welcome.css'
import { useNavigate } from 'react-router-dom';
import { Customer } from '../../models/Customer';

function Welcome(){

    const navigate = useNavigate();

    let userCard : any = 0;
    let userPin : any = 0;

    const goToChooseAccount = () =>
    {
        navigate('/chooseaccount')
    };

    const gotToCreateAccount = () => {
        // This will navigate to first component
        navigate('/createcustomer'); 
    };                         
    
 
        // make a function if loging info matches are user in db = welcome page else
        // user not found message display.
        const [users, setUser] = useState({} as Customer);
    
    
        function GetCustomerCard(e: any) {
          userCard = e.target.value;
          console.log(userCard);
        }
      
        function GetCustomerPin(e: any) {
          userPin = e.target.value;
          console.log(userPin);
        }
      
        async function onSubmit(e: any) {
          e.preventDefault();
      
          await fetch(
            "http://codebebopp2project-env.eba-ag3aw5vp.us-east-1.elasticbeanstalk.com/api/Customer/SearchCustomer?" +
              new URLSearchParams({
                cardNumber: userCard,
                pin: userPin
              })
            
          )
            .then((response) => response.json())
              .then((response => {
              // change/ attached user to user id in db
              setUser(response);

              console.log(response);
      
              goToChooseAccount ();
            }));
        }//end of onSubmit

     
    return (
        <form className="welcome-container" onSubmit={onSubmit}>
            <div className="input-container">
            <label htmlFor="inputCardNumber" className='topmarg'><h2>Login</h2></label>
                <div>
                <label htmlFor="loginlabel" className='topmarg'>Card Number</label>
                <input type="text" className="form-control" id="inputCardNumber" aria-describedby="" placeholder="" required onChange={GetCustomerCard} />
                </div>
                <div>
                <label htmlFor="inputPIN" className='topmarg'>PIN</label>
                <input type="password" className="form-control" id="inputPIN" placeholder="" required onChange={GetCustomerPin}/>
                </div>
                <div>
                <button type="submit" className="btn btn-primary topmarg">
                <div>Sign In</div>
                </button>
                </div>            
            </div>   
          
            <div className='create-container'>
                <label htmlFor="buttonlabel" className='topmarg'><h2>No Account?</h2></label>
                <br></br>
                <br></br>
                <button type="submit" className="btn btn-primary">
                <div onClick={gotToCreateAccount}>Create</div>
                </button>
            </div>
        </form>
    )//end of return
    
}
export default Welcome