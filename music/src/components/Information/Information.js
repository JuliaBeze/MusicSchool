import React from 'react';
import s from "./Information.module.css";
import InformAll from "./InformAll";
import sign from "../../images/sign.jpeg";
import choose from "../../images/choose.jpg";
import teacher from "../../images/teacher.jpg";

function Information() {

    const signUpImg = {
        backgroundImage: `url(${sign}) `
    };
    const chooseProgramImg= {
        backgroundImage: `url(${choose}) `
    };
    const teachersInfImg = {
        backgroundImage: `url(${teacher}) `
    };
    return (



        <div className={s.information}>
            <div className={s.container}>
                <div className={s.informWrapper}>
                    <InformAll
                        title={"Записаться на занятия"}
                        style={signUpImg}/>
                    <InformAll
                        title={"Выбрать программу"}
                        style={chooseProgramImg}/>
                    <InformAll
                        title={"Узнать о преподавателяx"}
                        style={teachersInfImg}/>
                </div>

            </div>
        </div>


    )
}



export default Information;
