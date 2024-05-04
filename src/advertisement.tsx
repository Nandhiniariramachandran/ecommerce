import React from "react";
import {Link} from "react-router-dom";
import back2 from './back2.jpg';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomePage from './homepage';
import './App.css';


const FrontPage = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/home');
    };

    return (
        <div>
            <h1 style={{textAlign: 'center',fontFamily:'serif',color:'red'}}>
                KIDS FASHION INDIA
            </h1>
            <h2 style={{textAlign: 'center',fontFamily:'initial',fontWeight:'normal',fontSize:'18px'}}>
                Largest kids wear clothing, dresses, costumes, outfits in latest designs
            </h2>
            <h4 style={{textAlign: 'center',fontFamily:'initial',fontWeight:'normal',fontSize:'16px'}}>
            <Link to="/about" style={{textDecoration: 'none', color: 'red'}}>About</Link> / <Link to="/contact" style={{textDecoration: 'none', color: 'red'}}>Contact</Link>
            </h4>
            <img src={back2} alt="back2" style={{width:'100%'}} />
            <Button className="btnColor" variant="contained" onClick={handleHomeClick} style={{top:'-210px',right:'-700px',color:'white',backgroundColor:'red'}}>Shop Now</Button>
        </div>
    );
};

export default FrontPage; 
