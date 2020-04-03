import React from 'react';
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";





function Navbar() {
    return (

            <div className={s.navMenu}>
                <nav className={s.navigation}>
                    <div className={s.link}>
                        <NavLink to = "/main"> Главная </NavLink>
                    </div>
                    <div  className={s.link}>
                        <NavLink to="/programs">Программы</NavLink>
                    </div>
                    <div className={s.link}>
                        <NavLink to="/record"> Запись </NavLink>
                    </div>
                    <div className={s.link}>
                        <NavLink to="/teachers">Преподаватели </NavLink>
                    </div>
                    <div className={s.link}>
                        <NavLink to="/aboutus">Онас </NavLink>
                    </div>
                </nav>
            </div>

    );
}

export default Navbar;
