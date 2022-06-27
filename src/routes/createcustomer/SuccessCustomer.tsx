import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Customer } from '../../models/Customer';

export default function SuccessCustomer(props : Customer) {

    const navigate = useNavigate();
    const goToNewCustInfo = () => {
        navigate('/');
    };


  return (
    <div className="createcustomer-container ">
    <h3>Thank you for opening an account with CoderBebopATM!</h3>
    <h5>Please use the given values to sign in!</h5>
    <h6>Card Number : {props.cardNumber}</h6>
    <h6>Pin : {props.pin}</h6>
    <h6>CoderBebopATM the future of ATM</h6>

    <button type="submit" className="btn btn-primary" onClick={goToNewCustInfo}> <div>Go to login </div> </button>
    </div>
  )
}
