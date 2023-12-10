import React from 'react'
import css from "./header.module.css";
import LogoHome from "../../../assets/icons/logohome";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Header() {
  return (
    <>
    <header>
        <div className={css.nav}>
        <LogoHome/>
        </div>
        <div style={{backgroundColor:'red', height:'100rem'}}>


        </div>
    
    </header>
    </>
  )
}

export default Header;