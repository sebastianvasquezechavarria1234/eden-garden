import React from "react";
import { Route, Routes } from "react-router-dom";
import { Landing } from "../landing/pages/Landing";
import { Productos } from "../landing/pages/Productos";
import { Servicios } from "../landing/pages/Sericios";
import { Login } from "../landing/pages/Login";
import { Dashboard } from "../dashboard/pages/Dashboard";
import { DashboardProductos } from "../dashboard/pages/DashboardProductos";
import { DashboardServicios } from "../dashboard/pages/DashboardServicios";
import { Amazon } from "../dashboard/pages/pagesServicios/Amazon";
import { Spotify } from "../dashboard/pages/pagesServicios/Spotify";
import { Netflix } from "../dashboard/pages/pagesServicios/Netflix";

export const Rutas = () =>{
    return(
        <>
            <Routes>
                <Route path="/"  element={ <Landing /> } />
                <Route path="/productos" element={<Productos />}/>
                <Route path="/servicios" element={<Servicios />}/>
                <Route path="/login" element={<Login />}/>

                {/* DASHBOARD */}
                <Route path="/dashboard" element={ <Dashboard /> }>
                    <Route path="productos" element={<DashboardProductos />} />
                    <Route path="servicios" element={<DashboardServicios />}>
                        {/* DASHBOARD SERVICIOS */}
                        <Route path="amazon" element={<Amazon />} />
                        <Route path="spotify" element={<Spotify />} />
                        <Route path="netflix" element={<Netflix />} />
                    </Route>

                </Route>
            </Routes>
        </>
    )
}