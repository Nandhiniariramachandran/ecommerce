import React from "react";
import './App.css'; 
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
     
  const navigate = useNavigate();
  
  const handleShoppingClick = () => {
    
    navigate('/shoppingpage');

  };

 
  return (
    
    <div>
      <h1 style={{fontFamily:'serif',color:'pink'}}> WELCOME USERS! </h1>

      <div className="button-container">
      <div>

        <Button className="btnColor" onClick={handleShoppingClick} variant="contained" style={{top:'-92px',left:'80px',color:'white',backgroundColor:'red'}}>SHOPPING</Button>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;
