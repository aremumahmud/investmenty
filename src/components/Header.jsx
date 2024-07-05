import '../css/header.css'
import logo from '../assets/Daniel_Gallego__2_-removebg-preview.png'
import {FaArrowDownUpLock, FaBars, FaBriefcase, FaDollarSign, FaGears, FaHandshake, FaHouse, FaNewspaper, FaPhone, FaShop, FaX} from 'react-icons/fa6'
import { useEffect, useState } from 'react'

function Header(){

    let [on , setOn] = useState(false)

    useEffect(()=>{
        window.onresize = ()=>{
            setOn(false)
        }
    } , [])

    return (
       <div className="ming">
         <div className="header_wrap">
<div className="left_menu">
    <ul>
        <li><FaHouse /><a href="/the-firm">The Firm</a></li>
        <li><FaShop /><a href="#services">Businesses</a></li>
        <li><FaNewspaper /><a href="#news">News & Insights</a></li>
    </ul>
</div>
<div className="logo">  <a href="/"><img src={logo} alt="" /></a></div>
<div className="right_menu">
<ul>
        <li><FaArrowDownUpLock /> <a href="#about">Investor Login</a></li>
        <div style={{
                border: '1px solid black'
            }} id="google_translate_element"></div>
     <li><FaPhone />  <a href="#contact">Contacts</a> </li>
    </ul>
</div>
<div className="hidden_menu" onClick={()=>setOn(on_=>!on_)}>
    {
        on ?<FaX />:<FaBars />
    }
    
</div>
        </div>
        <div className="menu" style={on?{display:'block'}:{display:'none'}}>
            <ul>
            <a href="/"><li><FaHouse />Home</li></a>
            <li><FaGears />Services</li>
            <li><FaNewspaper />News & Insights</li>
            <li><FaHandshake />What we do</li>
            <li><FaDollarSign />Funding</li>
            <li><FaPhone />Contacts</li>
            </ul>
        </div>
       </div>
       
    )
}


export default Header