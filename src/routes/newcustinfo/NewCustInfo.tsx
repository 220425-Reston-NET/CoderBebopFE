import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './NewCustInfo.css'
import CreateCustomer from '../createcustomer/CreateCustomer';

function NewCustInfo() {

  const navigate = useNavigate();
  const goToWelcome = () => {
    navigate('/');
  };

  return (

    <div className='info-container'>
      <ul className="list-group styling-container">
        <h4>Card Number</h4>
        <li className="list-group-item styling-container">random</li>
        <h4>PIN</h4>
        <li className="list-group-item styling-container">random</li>
      </ul>
        <button type="submit" className="btn btn-primary styling-container"><div onClick={goToWelcome}>Back to Login</div></button>
    </div>
  )
}

export default NewCustInfo