import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import { AddAccount } from './components/Accounts/AddAccount';
import { AccountList } from './components/Accounts/AccountList';
import { Heading } from "./components/Heading";
function App() {
  const token = localStorage.getItem('token');
  if(!token) {
    return <Login />
  }

  return (
    <>
    <Heading />
    <div className="container">
    
      <Switch>
        <Route path="/" component={AccountList} exact />
        <Route path="/addaccount" component={AddAccount} exact />
      </Switch>
    </div>
    </>
  );
}

export default App;