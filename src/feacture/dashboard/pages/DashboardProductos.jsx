import React, { useState } from "react";
import { ProductosForm } from "../components/ProductosForm";
import { ProductosTable } from "../components/ProductosTable";

export const DashboardProductos = () => {

    const  [users, setUsers] = useState([])

    const registerUser = (user) => {

        const repetirName = users.some((n => n.name === user.name))

        if(repetirName){
            alert("esto esta repetido")
            return
        }else{
            setUsers([...users, user])
        }

    }


    return (

        <>
            <section className="p-[20px] flex gap-[30px]">
                <ProductosForm registerUser={registerUser} users={users}/>
                <ProductosTable users={users} />
            </section>
        </>
    )
}