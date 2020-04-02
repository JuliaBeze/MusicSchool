import React from 'react';
import s from "./Header.module.css"
import Navbar from "./Navbar";



function Header  () {

        return (

                <div className={s.menuMainImage}>
                    <div className={s.menuMain}>
                        <div className={s.container}>
                            <Navbar/>

                        </div>
                    </div>
                </div>


        )
    }



export default Header;
