import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './CreateCustomer.css'
import {Customer} from '../../models/Customer'


function CreateCustomer() {

    let CusName: string = '';
    let CusPhone: string = '';
    let CusAddress: string = '';
    let CusEmail: string = '';
    let CusID: number = 0;
    let ConfirmCusID: number = 0;
    let CardNumber : number;
    let Pin : number;

    const [customer, setcustomer] = useState({} as Customer);
    
    function insertName(e: any) {
        CusName = e.target.value;
        
    }
    function insertPhone(e: any) {
        CusPhone = e.target.value;
    }
    function insertAddress(e: any) {
        CusAddress = e.target.value;
    }
    function insertEmail(e: any) {
        CusEmail = e.target.value;
    }
    function insertCustID(e: any) {
        CusID = e.target.value;
    }
    function insertConfirmID(e: any) {
        ConfirmCusID = e.target.value;
    }

    
    async function onSubmit(e: any) {
        e.preventDefault();

            await fetch("http://codebebopp2project-env.eba-ag3aw5vp.us-east-1.elasticbeanstalk.com/api/Customer/AddCustomer", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    custID: CusID,
                    name: CusName,
                    phone: CusPhone,
                    address: CusAddress,
                    email: CusEmail,
                    cAccID: ConfirmCusID,
                    cardNumber: CardNumber,
                    pin: Pin

                   
                    
                }
            )

        
           
        }).then(response => response.json())
            .then(response => {
            
            setcustomer(response);  

            console.log(response);

        });
    };


    const navigate = useNavigate();
    const goToNewCustInfo = () => {
        navigate('/');
    };


    return (
        <form className='createcustomer-container' onSubmit={onSubmit}>
            <div className="form-group col-md-4 ">
                <label htmlFor="inputName"><b>Name</b></label>
                <div>
                    <input type="text" className="form-control" id="inputAddress" placeholder="John Doe" onChange={insertName} />
                </div>
            </div>
            <div className="form-group col-md-4 ">
                <label htmlFor="inputPhoneNumber"><b>Phone Number</b></label>
                <div>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234567890" onChange={insertPhone} />
                </div>
            </div>
            <div className="form-group col-md-4">
                <label htmlFor="inputAddress"><b>Address</b></label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" onChange={insertAddress} />
                <label htmlFor="inputEmail"><b>Email</b></label>
                <div>
                    <input type="text" className="form-control" id="inputEmail" placeholder="johndoe@ymail.com" onChange={insertEmail} />
                </div>
            </div>

            <div className="form-group col-md-4">
                <label htmlFor="inputID"><b>SSN</b></label>
                <div>
                    <input type="number" className="form-control" id="inputAddress" placeholder="1" onChange={insertCustID} />
                </div>
                <label htmlFor="inputConfirmID"><b>Confirm SSN</b></label>
                <div>
                    <input type="number" className="form-control" id="inputEmail" placeholder="1" onChange={insertConfirmID} />
                </div>
                <div className="col-12 createcustomer-container" style ={{marginTop:'-4rem'}}>
                    <button type="submit" className="btn btn-primary"> <div>Create Account </div> </button>
                </div>
                <div style ={{marginTop:'-5rem'}}>
                <div><b>Once you create an account, please use the given generated values to sign in!</b></div>
                <div><b>Card Number : </b>{customer.cardNumber}</div>
                <div><b>Pin : </b>{customer.pin}</div>
                </div>
            </div>
        </form>
    )
}

export default CreateCustomer;


