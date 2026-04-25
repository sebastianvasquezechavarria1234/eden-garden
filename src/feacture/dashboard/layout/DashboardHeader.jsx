import React from "react";
import { Link } from "react-router-dom";


export const DashboardHeader = () => {
    return(
        <>
            <section className="w-[20%] bg-[var(--green)] h-full text-white p-[30px]">
                <ul className="flex flex-col gap-[10px]">
                    <li>
                        <h2 className="text-[var(--yellow)] text-[1.5rem] font-bold">Eden Garden</h2>
                    </li>
                    <li>
                        <Link to="productos">Productos</Link>
                    </li>
                    <li>
                        <Link to="servicios">Servicios</Link>
                    </li>
                </ul>

            </section>
        </>
    )
}