import React from 'react'
import css from "./header.module.css";
import LogoHome from "../../../assets/icons/logohome";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Header() {
  return (
    <>
    <header className={css.header}>
        <div>
        <LogoHome/>
        </div>
         <nav className={css.nav}>
         </nav>
    </header>
    </>
  )
}

export default Header;