import React from 'react';
import s from "./Programs.module.css"


function Programs  () {

    return (
        <div className={s.programs}>
                <div className={s.container}>
                   <div>Вводная программа</div>
                   <div>Основная программа</div>
                   <div>Годовая программа</div>
                   <div>Индивидуальная программа</div>
                </div>
        </div>
    )
}



export default Programs;
