import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";
// import { GlobalContext } from '../context/GlobalState';

export const AddAccount = () => {
  let history = useHistory();

//   const { addAccount, accounts } = useContext(GlobalContext);

  const [user, setUser] = useState();
  const [branch, setBranch] = useState("");
  const [ac_no, setAcNo] = useState("");
  const [name, setName] = useState("");
  
  
  const onSubmit = (e) => {
    e.preventDefault();
    const newAccount = {
        // user,
        branch,
        ac_no,
        name,
    };
        let token = localStorage.getItem('token'); // localStorage_token);
        
        alert(token)
        // axios.post("/sbi/account/", newAccount, { headers: {"Authorization" : `Bearer ${token}`} })
        axios({
            method: 'post',
            url: "/sbi/account/",
            headers: {"Authorization" : `Token ${token['token']}`},
            data: newAccount,
        }).then((res) => 
            // this.refreshList()
            alert('saved')
        );
    history.push("/");
  };
  

  return (
    <React.Fragment>
      <div className="w-full max-w-sm container mt-20 mx-auto">
        <form onSubmit={onSubmit}>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Name of account
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter name"
            />
          </div>

          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="branch"
            >
              Name of account
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              type="text"
              placeholder="Enter branch"
            />
          </div>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="ac_no"
            >
              Name of account
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={ac_no}
              onChange={(e) => setAcNo(e.target.value)}
              type="text"
              placeholder="Enter ac_no"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <button className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Add Account
            </button>
          </div>
          <div className="text-center mt-4 text-gray-500">
            <Link to="/">Cancel</Link>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};