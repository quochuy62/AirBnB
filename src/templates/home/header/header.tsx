import React, { useState } from 'react';
import css from "./header.module.css";
import LogoHome from "../../../assets/icons/logohome";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Drop from "./drop/drop"


function Header() {

  return (
    <>
    <header className={css.header}>
        <div>
        <LogoHome/>
        </div>
         <nav className={css.navi} >
          <NavLink className={css.nav} to="profile">Nơi ở</NavLink>
          <NavLink className={css.nav} to="/">Trải nghiệm</NavLink>
          <NavLink className={css.nav} to="/">Trải nghiệm trực tuyến</NavLink>     
         </nav>
         
         <Drop/>
    </header>
    </>
  )
}

export default Header;