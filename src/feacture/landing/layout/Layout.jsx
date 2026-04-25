import React from "react";
import { Header } from "./Header";
import { Hero } from "./Hero";

export const Layout = ({title}) =>{
    return(
        <>
            <Header />
            <Hero title={title}/>
        </>
    )
}