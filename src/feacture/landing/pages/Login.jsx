import React, { useState } from "react";
import BgHero from '/landing-hero.webp'
import { Header } from "../layout/Header";
import { useNavigate } from "react-router-dom";


export const Login = () => {

    const [ name, setName ] = useState("");
    const [ password, setPassword ] = useState("");


    const user = {
        name : "sebas",
        password : "sebas"
    }


    const navegation = useNavigate()

    const login = (e) => {
        e.preventDefault();

        if(name === user.name && password === user.password){
            alert("si puedes entrar")
            navegation("/dashboard")
        }else{
            alert("no pyedes entarr")
        }
    }

    return (
        <>
            <Header />
            <section className="w-full h-screen relative">
                <img
                    className="w-full h-full object-cover"
                    src={BgHero}
                    alt="bg" />

                {/* FORM */}
                <form 
                    onSubmit={login} 
                    className="absolute left-[50%] translate-x-[-50%] p-[20px] rounded-[20px] w-[350px] top-[50%] bg-white z-50" 
                    action="">
                    <h2 className="text-center text-[2rem] font-bold mb-[20px}">Inicia session</h2>
                    {/* INPUT */}
                    <label className="relative">
                        <p className="translate-y-[18px] translate-x-[5px] inline-flex bg-white p-[5px]">Nombre del usuario</p>
                        <input
                            onChange={(e) =>setName(e.target.value)} 
                            className="w-full border-1 border-black/10 p-[13px] outline-none shadow-md rounded-[10px]" 
                            type="text" 
                            placeholder="Por ejemplo : Sebas12345"
                            required
                            minLength={3}/>
                    </label>
                    {/* INPUT */}
                    <label className="relative">
                        <p className="translate-y-[18px] translate-x-[5px] inline-flex bg-white p-[5px]">Password</p>
                        <input
                            onChange={(e) =>setPassword(e.target.value)} 
                            className="w-full border-1 border-black/10 p-[13px] outline-none shadow-md rounded-[10px]" 
                            type="password" 
                            placeholder="********"
                            required
                            minLength={3}/>
                    </label>
                    <input className="bg-[var(--green)] p-[13px] rounded-[10px] cursor-pointer w-full text-center uppercase text-white mt-[20px]" type="submit" value={"Ingresar"}/>
                </form>
            </section>
        </>
    )
}