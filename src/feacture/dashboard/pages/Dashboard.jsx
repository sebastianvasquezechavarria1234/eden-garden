import React from "react";
import { DashboardHeader } from "../layout/DashboardHeader";
import { Outlet } from "react-router-dom";
import { DashboardNavBar } from "../layout/DashboardNavBar";


export const Dashboard = () => {
    return(
        <>
            <main className="flex w-full h-screen">
                <DashboardHeader />
                <section className="w-[80%]">
                    <DashboardNavBar />
                    <Outlet />
                </section>


            </main>
        </>
    )
}