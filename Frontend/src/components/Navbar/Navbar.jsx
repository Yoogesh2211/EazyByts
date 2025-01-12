import React from 'react'
import { useState } from 'react'
import './Navbar.css'
import PortfolioIcon from '../../assets/icons/PortfolioIcon.png'
import PortfolioThemesIcon from '../../assets/icons/PortfolioThemeIcon.png'
import PortfolioDetailsIcon from '../../assets/icons/PortfolioDetailsIcon.png'
import NotificationIcon from '../../assets/icons/NotificationIcon.png'
import SettingIcon from '../../assets/icons/SettingIcon.png'
import SignOutIcon from '../../assets/icons/SignOutIcon.png'

const Navbar = (props) => {
  return (
    <div className='Navbar'>
        <div className='Navbar_links' onClick={()=>{props.setNav("Portfolio")}}>
            <img src={PortfolioIcon}/>
            <div>Portfolio</div>
        </div>
        <div className='Navbar_links' onClick={()=>{props.setNav("Portfolio Themes")}}>
            <img src={PortfolioThemesIcon}/>
            <div>Themes</div>
        </div>
        <div className='Navbar_links' onClick={()=>{props.setNav("Portfolio Details")}}>
            <img src={PortfolioDetailsIcon}/>
            <div>Details</div>
        </div>
        <div className='Navbar_links' onClick={()=>{props.setNav("Notifications")}}>
            <img src={NotificationIcon}/>
            <div>Notifications</div>
        </div>
        <div className='Navbar_links' onClick={()=>{props.setNav("Settings")}}>
            <img src={SettingIcon}/>
            <div>Settings</div>
        </div>
        <div className='Navbar_links' onClick={()=>{props.setNav("SignOut")}}>
            <img src={SignOutIcon}/>
            <div>Sign Out</div>
        </div>
    </div>
  )
}

export default Navbar