
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import { Link, useHistory } from 'react-router-dom';
// import { Navigate, useNavigate } from 'react-router-dom'

// async function loginUser(credentials) {
//  return fetch('http://localhost:8000/api-token-auth/', {
//    method: 'POST',
//    headers: {
//      'Content-Type': 'application/json'
//    },
//    body: JSON.stringify(credentials)
//  })
//    .then(data => {
//        if(data) {
//         alert(JSON.stringify(data))
//        }
        
//        return data.json()
//     })
// }

export default function Login() {
    let history = useHistory();
    // const navigate = useNavigate()
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async e => {
    e.preventDefault();
    console.log('login')
    axios.post('api-token-auth/',{username, password})
        .then(function (res) {
            console.log('login res--------', res);
            if (res) {
                const token = res.data.token;
                localStorage.setItem('token', token); // JSON.stringify(token));
                // history.push("/");
                // navigate('/')
                window.location.reload();
            } else {
                console('error')
            }
        })
        .catch(function (error) {
            console.log(error);
        });
  }
  return(

    <div className="w-full max-w-sm container mt-20 mx-auto">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <div className="w-full mb-5">
            <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="name"
            >
            Username
            </label>
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
            type="text"
            placeholder="Username"
            onChange={e => setUserName(e.target.value)} 
            />
        </div>
        <div className="w-full mb-5">
            <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="name"
            >
            Password
            </label>
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
            />
        </div>
        <div className="flex items-center justify-between">
            <button className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Submit
            </button>
        </div>
      </form>
    </div>
  )
}

