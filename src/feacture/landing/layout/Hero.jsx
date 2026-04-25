import React from "react";
import BgHero from '/landing-hero.webp'

export const Hero = ({title}) => {
    return (
        <section className="w-full h-screen relative">
            <img
                className="w-full h-full object-cover"
                src={BgHero}
                alt="bg" />

            <div className="text-[var(--yellow)] text-[3rem] font-bold z-50 absolute bottom-[50px] left-[50%] translate-x-[-50%]">
                <h1>{title}</h1>
            </div>
        </section>
    )
}