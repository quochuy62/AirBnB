import React, { useState } from 'react';
import css from "./header-admin.module.css"
import ChangeDrop from './change-drop/changeDrop';
import Logohome from '../../../assets/icons/logohome';
import { NavLink } from 'react-router-dom';


function HeaderAdmin() {
  
  return (
    <div>
    <div className={css.header}>
      <Logohome/>
      <ChangeDrop/>
    </div>
    <div >
    <NavLink to = "/" className={css.navAdmin}>Quản lý người dùng</NavLink>
    <NavLink to = "/" className={css.navAdmin}>Quản lý thông tin vị trí</NavLink>
    <NavLink to = "/" className={css.navAdmin}>Quản lý thông tin phòng</NavLink>
    <NavLink to = "/" className={css.navAdmin}>Quản lý đặt phòng</NavLink>

    </div>


    </div>
  )
}

export default HeaderAdmin;
