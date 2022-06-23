import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Welcome from './routes/welcome/Welcome';
import Nav from './shared/Nav';
import Mainmenu from './routes/mainmenu/Mainmenu';
import CreateCustomer from './routes/createcustomer/CreateCustomer';
import ChooseAccount from './routes/chooseaccount/ChooseAccount';
import Deposit from './routes/deposit/Deposit';
import Transfer from './routes/transfer/Transfer';
import NewCustInfo from './routes/newcustinfo/NewCustInfo';
import Withdraw from './routes/withdraw/Withdraw';

function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='/mainmenu' element={<Mainmenu/>}/>
      <Route path='/createcustomer' element={<CreateCustomer/>}/>
      <Route path='/chooseaccount' element={<ChooseAccount/>}/>
      <Route path='/deposit' element={<Deposit/>}/>
      <Route path='/withdraw' element={<Withdraw/>}/>
      <Route path='/transfer' element={<Transfer/>}/>
      <Route path='/newcustinfo' element={<NewCustInfo/>}/>
    </Routes>
    </>
  );
}

export default App;
