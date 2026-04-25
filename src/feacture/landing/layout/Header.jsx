import React from "react";
import { Logo } from '../../../assets/Icons/Icons'
import { Link } from "react-router-dom";


export const Header = () => {
    return(
        <>
            <header className="p-[10px] fixed text-white w-full z-50">
                <nav className="flex justify-between items-center">
                    <ul className="flex items-center gap-[20px]">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/productos">Productos</Link>
                        </li>
                    </ul>
                    <ul className="flex items-center gap-[20px]">
                        <li>
                            <a href="">
                                <h2 className="text-[23px] font-bold">Eden garden</h2>
                            </a>
                        </li>
                    </ul>
                    <ul className="flex items-center gap-[20px]">
                        <li>
                            <Link to="/servicios">Servicios</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>

                </nav>
            </header>
        </>
    )
}