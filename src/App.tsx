import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Create from './components/Create';

function App() {
  return (
    <>
      <Welcome/>
      <Login/>
      <Create/>
    </>
  );
}

export default App;
