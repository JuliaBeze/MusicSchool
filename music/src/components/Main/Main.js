import React from 'react';
import './../Main/Main.css';


function Main() {

    return (
            <div className="all">
                <input checked type="radio" name="respond" id="desktop"/>
                <article id="slider">
                    <input checked type="radio" name="slider" id="switch1"/>
                    <input type="radio" name="slider" id="switch2"/>
                    <input type="radio" name="slider" id="switch3"/>
                    <input type="radio" name="slider" id="switch4"/>
                    <input type="radio" name="slider" id="switch5"/>

                    <div id="slides">
                        <div id="overflow">
                            <div className="image">

                                <article><img
                                    src="https://cdn.pixabay.com/photo/2018/07/28/11/08/guitar-3567767_1280.jpg"/>
                                </article>
                                <article><img
                                    src="https://www.culture.ru/storage/images/383aefa6dfbed02a8c5925e1ac9ed8df/31acc382fe9de85263109649fb8bab8e.jpg"/>
                                </article>
                                <article><img
                                    src="https://cdn.pixabay.com/photo/2016/11/19/13/57/drum-set-1839383_1280.jpg"/>
                                </article>

                                <article><img
                                    src="https://cdn.pixabay.com/photo/2018/01/18/12/39/music-3090204_1280.jpg"/>
                                </article>
                                <article><img
                                    src="https://cdn.pixabay.com/photo/2019/09/16/12/37/cello-4480885__480.jpg"/>
                                </article>
                            </div>
                        </div>
                    </div>
                </article>
                <div id="controls">
                    <label htmlFor="switch1"> </label>
                    <label htmlFor="switch2"> </label>
                    <label htmlFor="switch3"> </label>
                    <label htmlFor="switch4"> </label>
                    <label htmlFor="switch5"> </label>
                </div>
                <div id="active">
                    <label htmlFor="switch1"> </label>
                    <label htmlFor="switch2"> </label>
                    <label htmlFor="switch3"> </label>
                    <label htmlFor="switch4"> </label>
                    <label htmlFor="switch5"> </label>
                </div>

            </div>






    )
}



export default Main;
