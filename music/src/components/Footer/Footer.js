import React from "react";
import s from "./Footer.module.css";


function Footer() {

    return (
        <div className={s.footer}>

                <div className={s.container}>
                    <span className={s.blockTitle}>Julia Beze</span>
                    <span className={s.copyRight}> © 2020. All rights reserved </span>
                </div>

        </div>
)
}

export default Footer;