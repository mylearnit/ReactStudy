import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import { GlobalProvider } from './context/GlobalState';
import Login from './components/Login/Login';
import { Home } from './components/Home';
import { AddEmployee } from './components/AddEmployee';
import { AddAccount } from './components/Accounts/AddAccount';
import { EditEmployee } from './components/EditEmployee';
import useToken from './useToken';

function App() {
  // const [token, setToken] = useState();
  // const { token, setToken } = useToken();
  const token = localStorage.getItem('token');
  if(!token) {
    return <Login />
  }

  return (
    <GlobalProvider>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/addaccount" component={AddAccount} exact />
          <Route path="/edit/:id" component={EditEmployee} exact />
        </Switch>
      </div>
    </GlobalProvider>
  );
}

export default App;