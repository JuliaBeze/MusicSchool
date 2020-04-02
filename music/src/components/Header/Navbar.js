import React from 'react';
import s from "./Navbar.module.css";

function Navbar() {
    return (

            <div className={s.navMenu}>
                <nav className={s.navigation}>
                    <div className={s.link}>
                        <a href = "/main">Главная </a>
                    </div>
                    <div  className={s.link}>
                        <a href="/programs">Программы</a>
                    </div>

                    <div className={s.link}>
                        <a href="/record"> Запись </a>
                    </div>
                    <div className={s.link}>
                        <a href="/teachers">Преподаватели </a>
                    </div>
                    <div className={s.link}>
                        <a href="/aboutus">Онас </a>
                    </div>

                </nav>
            </div>

    );
}

export default Navbar;
