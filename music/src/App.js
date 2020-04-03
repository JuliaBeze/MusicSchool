import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import Programs from "./components/Programs/Programs";
import Main from "./components/Main/Main";
import Teachers from "./components/ Teachers/Teachers";
import AboutUs from "./components/AboutUs/AboutUs";
import Record from "./components/Record/Record";
import Information from "./components/Information/Information";
import Contacts from "./components/Footer/Contacts";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                {/*<Navbar/>*/}

                <div className="app-wrapper-content">

                    <Route path="/main" component={Main}/>
                    <Information/>
                    <Route path="/teachers" component={Teachers}/>
                    <Route path="/programs" component={Programs}/>
                    <Route path="/record" component={Record}/>
                    <Route path="/aboutus" component={AboutUs}/>
                    <Contacts/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
