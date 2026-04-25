import React from "react";
import { useNavigate } from "react-router-dom";

export const DashboardNavBar = () => {

    const navegation = useNavigate();


    const out = () =>{
        navegation("/")
    }

    return(
        <>
            <nav className="w-full px-[20px] py-[10px] shadow-lg flex justify-between">
                <ul>
                    <p>Bienvinido al dasboard</p>
                </ul>
                <ul>
                    <li>
                        <p 
                            onClick={out}
                            className="cursor-pointer">Salir</p>
                    </li>
                </ul>
            </nav>
        </>
    )
}