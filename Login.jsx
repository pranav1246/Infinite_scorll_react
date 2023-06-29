import React, { useState } from 'react';
import ReactDOM from "react-dom";
import { InfiniteScroll } from "../InfiniteScroll";



const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);
  
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
     
      if (username === 'foo' && password === 'bar') {
     
        setLoginError(false);
        console.log('Login successful');
      } else {
  
        setLoginError(true);
        console.log('Login failed');
      }
    };
    function renderInfi(){
 if (loginError){
    ReactDOM.render(
        <React.StrictMode>
          <InfiniteScroll />
        </React.StrictMode>,
        document.getElementById("root")
      );
 }
 else{
    console.log("error");
 }
    }

    return (
      <div>
      <center>
        <h2>Login Page</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div>
            <label htmlFor="password">Passwordss:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          {loginError && <p style={{ color: 'red' }}>Invalid username or password</p>}
          <button type="submit" onClick={renderInfi}>Login</button>
        </form>
        </center>
      </div>
    );
  };
  
  export default LoginPage;
  