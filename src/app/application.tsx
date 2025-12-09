import React from "react";
import {Header} from "./components/Header.js";
import {DashboardPage} from "./pages/DashboardPage.js";


export function Application(){
    return(
        <>
            <Header/>
            <DashboardPage/>
        </>
    );
}