import './App.css'; 
import Button from '@mui/material/Button';
import backgroundImage from './backgroundimage.jpg'; 
import React, { useState } from 'react';
import LoginPage from './loginpage';
import { TextField } from '@mui/material';

function LoginForm() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");
  
  const handleLoginClick = () => {
    console.log(username);
    console.log(password);


    if(username ==='nandhini'&& password === '123987')
      {
       
        setIsLoggedIn(true);
        setError('')
      }
    else{
      setIsLoggedIn(false);

      setError('Username or Password is incorrect')
      console.log('error::'+ error)

       
 
    }
  };


  return (
    <div>
      <header className="App-header">
      <img src={backgroundImage} alt="backgroundimage" style={{width:'100%'}} />
      <div className="button-container">
      {isLoggedIn && (
    <p>
      <LoginPage/> 
      
    </p>
 )
 }
        {!isLoggedIn && (
  
 <>

<label>
        <h2 style={{color:'red'}}>{error}</h2>
</label>
            <TextField 
            id ="username"
            label ="Username"
            variant="outlined"
            value={username}
            style={{ backgroundColor: 'white' }}

            onChange={(e) => setUsername(e.target.value)} />
            <br></br><br></br>

            <TextField
            id ="password"
            label ="Password"
            variant="outlined"
            value={password}
            style={{ backgroundColor: 'white' }}

            onChange={(e) => setPassword(e.target.value)} />
            <br></br><br></br><br></br>

          <Button className="btnColor" onClick={handleLoginClick} variant="contained" style={{color:'white',backgroundColor:'red'}}>LOGIN</Button>
          </>
        )
    }
    
  </div>  
 
    </header>
  
 
 </div>
  

  );
}

export default LoginForm;



























