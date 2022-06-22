import React, { useEffect, useState } from 'react'
import './CreateCustomer.css'
import '../popup/Popup.tsx'


function CreateCustomer() {

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    let CusName: string = '';
    let CusPhone: string = '';
    let CusAddress: string = '';
    let CusEmail: string = '';
    let CusID: number = 0;
    let ConfirmCusID: number = 0;

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

    function onSubmit(e: any) {
        e.preventDefault();

        fetch("http://codebebopp2project-env.eba-ag3aw5vp.us-east-1.elasticbeanstalk.com/api/Customer/AddCustomer", {
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
                    cAccID: ConfirmCusID
                }
            )
        });


    }

    return (
        <form className='createcustomer-container' onSubmit={onSubmit}>
            <div className="form-group col-md-4 ">
                <label htmlFor="inputName">Name</label>
                <div>
                    <input type="text" className="form-control" id="inputAddress" placeholder="John Doe" onChange={insertName} />
                </div>
            </div>
            <div className="form-group col-md-4 ">
                <label htmlFor="inputPhoneNumber">Phone Number</label>
                <div>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234567890" onChange={insertPhone} />
                </div>
            </div>
            <div className="form-group col-md-4">
                <label htmlFor="inputAddress">Address</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" onChange={insertAddress} />
                <label htmlFor="inputEmail">Email</label>
                <div>
                    <input type="text" className="form-control" id="inputEmail" placeholder="johndoe@ymail.com" onChange={insertEmail} />
                </div>
            </div>

            <div className="form-group col-md-4">
                <label htmlFor="inputID">Customer ID</label>
                <div>
                    <input type="number" className="form-control" id="inputAddress" placeholder="1" onChange={insertCustID} />
                </div>
                <label htmlFor="inputConfirmID">Confirm Customer ID</label>
                <div>
                    <input type="number" className="form-control" id="inputEmail" placeholder="1" onChange={insertConfirmID} />
                </div>
                </div>
            isOpen && <Popup>content={<>
        <b>Design your Popup</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button>Test button</button>
        </>}
        <button type="submit" className="btn btn-primary " onClick={togglePopup}>Create Account</button>
        handleClose={togglePopup}</Popup>

        </form>
    )
}

export default CreateCustomer

/* 
<div>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
{isOpen && <Popup
    content={<>
        <b>Design your Popup</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button>Test button</button>
        </>}
        <button type="submit" className="btn btn-primary " onClick={togglePopup}>Create Account</button>
        handleClose={togglePopup}
    />}
  </div>
*/