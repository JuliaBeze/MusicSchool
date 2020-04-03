import React from 'react';
import s from "./Contacts.module.css";
import Footer from "./Footer";


function Contacts() {

    return (

        <div className={s.contacts}>
            <hr align="center" width="1300" size="2" color="00008b" />
            <div className={s.container}>

                <div className={s.timeInfo}>

                    <div className={s.clockTitle}> ЧАСЫ РАБОТЫ</div>
                    <div>Понелельник–пятница 7:00–19:00</div>
                    <div>Суббота, воскресенье 7:00–17:00</div>
                </div>
                <div className={s.address}>
                    <div className={s.addressTitle}>АДРЕС</div>
                    <div> ул. Арбат, 1а, Москва, Россия</div>
                    <div>info@mysite.ru</div>
                    <div> Телефон: +7 (495) 000-00-00</div>
                </div>

            </div>
            <Footer/>
        </div>


    )
}



export default Contacts;













//
//
//
//
//
// Будьте в курсе наших новостей
//
// Добавьте эл. почту*
//
// ОК



