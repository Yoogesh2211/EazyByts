import React from 'react'
import './Sidebar.css'
import Navbar from '../Navbar/Navbar'
import PortfolioDekhoLogo from '../../assets/logos/PortfoliodekhoLogo.png'
import Profile from '../Profile/Profile'
const Sidebar = (props) => {
  return (
    <div className='sidebarBox'>
      <img src={PortfolioDekhoLogo}/>
      <Navbar nav={props.nav} setNav={props.setNav}/>
      <Profile/>
    </div>
  )
}

export default Sidebar