import React, { useEffect, useState } from 'react'
import './Welcome.css'
import { useNavigate } from 'react-router-dom';

function Welcome(){
    const navigate = useNavigate();

    let userCard = "";
    let userPin = "";

    const goToMainMenu = () =>
    {
        navigate('/Mainmenu')
    };

    const gotToCreateAccount = () => {
        // This will navigate to first component
        navigate('/createcustomer'); 
    };                         
    
 
        // make a function if loging info matches are user in db = welcome page else
        // user not found message display.
        const [users, setUser] = useState({
          custID: 0,
          name: "",
          phone: "",
          address: "",
          email: "",
          cAccID:0
        });
    
    
        function GetCustomerCard(e: React.ChangeEvent<HTMLInputElement>) {
          userCard = e.target.value;
          console.log(userCard);
        }
      
        function GetCustomerPin(e: React.ChangeEvent<HTMLInputElement>) {
          userPin = e.target.value;
          console.log(userPin);
        }
      
        function onSubmit(e: React.FormEvent<HTMLFormElement>) {
          e.preventDefault();
      
          fetch(
            "http://medtrack-env.eba-sqq54brs.us-east-1.elasticbeanstalk.com/User/SearchUserByEmailAndPassword?" +
              new URLSearchParams({
                cardNumber: userCard,
                Pin: userPin
              })
            
          )
            .then((response) => response.json())
            .then((users) => {
              // change/ attached user to user id in db
              setUser((previousData) => users);
      
              goToMainMenu();
            });
        }//end of onSubmit

     
    return (
        <form onSubmit={onSubmit}>
        <form className="welcome-container">{/* Missing attribute */}
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
                <div onClick={goToMainMenu}>Sign In</div>
                </button>
                </div>            
            </div>
        </form>
                

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