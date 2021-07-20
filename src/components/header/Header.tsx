import React from 'react';
import logo from '../../assets/smarkets1.jpg';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import './Header.css';

export const Header = () => (
  <header className="header">
    <div className="wrapper">
        <div className="logo align-header" style={{ float: 'left'}}>
            <a href='/'>
                <img src={logo} alt="Smarkets logo" />
            </a>
        </div>
        <div className="user align-header">
            <AccountCircleOutlinedIcon />
            <span>Jane Doe</span>
        </div>
        <div className="language align-header">
            <HelpOutlineOutlinedIcon />
        </div>
    </div>
  </header>
);

export default Header;