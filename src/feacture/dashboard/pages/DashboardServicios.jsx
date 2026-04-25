import React from "react";
import { DashboardServiciosNavBar } from "../layout/DashboardServiciosNavBar";
import { Outlet } from "react-router-dom";

export const DashboardServicios = () => {
    return(
        <>
            <section className="p-[20px]">
                <DashboardServiciosNavBar />
                <Outlet />
                <article className="mt-[30px]">
            </article>
            </section>
        </>
    )
}