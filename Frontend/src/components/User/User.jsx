import React,{useState} from 'react'
import './User.css'

import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'

const User = () => {
    const [navigation,setNavigation]=useState("");
  return (
    <div className='PortfolioDekho'>
        <Sidebar nav={navigation} setNav={setNavigation}/>
        <Header nav={navigation}/>
    </div>
  )
}

export default User