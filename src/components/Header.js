import React from 'react';
import logo from '../components/keep-logo.png';
const Header = ()=>{
    
    return(<>
    <div className="header">
        <div className="logo"><img src={logo} alt="logo"/></div>
        <div className="keep"><h2>Keep</h2></div>
    </div>
    </>)
}
export default Header;