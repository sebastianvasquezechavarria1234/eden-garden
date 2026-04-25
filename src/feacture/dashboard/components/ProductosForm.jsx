import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


export const ProductosForm = ({registerUser, users}) => {

    // CATEGORIA
    const categoriaArray = ["---", "Tecnologico", "comida", "bebida", "Ropa", "Zapatos", "comedor", "Ollas"]

    // CONST INPUT
    const [name, setName] = useState("")
    const [precioAdquirido, setPrecioAdquirido] = useState(0)
    const [ganancia, setGanancia] = useState(0)
    const [categoria, setCategoria] = useState("")
    const [estado, setEstado] = useState(false)

    // CALCULAMOS EL TOTAL

    const total = parseInt(precioAdquirido) + parseInt(ganancia)

    // REPETIR EL NAME
    const validarName = () => {
        const repetirName =  users.some((users => users.name === name))

        // const [errorName = setErrorName ] = useState("")

        if(repetirName){
            alert("Este name ya esta registrado")
        }else{
            setErrorName("")

        }
    }


    // REGISTER DATA
    const register = (e) => {
        e.preventDefault()
        registerUser({name, precioAdquirido, ganancia, categoria, estado, total})
        setName("")
        setEstado(false)
    }

    return (
        <>
            <form 
                onSubmit={register} 
                className="w-[30%] p-[20px] rounded-[20px] shadow-xl border-1 border-black/10" 
                action="">
                <h2 className="text-[2rem] text-center leading-[30px] mb-[10px]">Registrar un producto</h2>
                {/* INPUT */}
                <label className="relative">
                    <p className="translate-y-[18px] translate-x-[5px] inline-flex bg-white p-[5px]">Nombre del producto</p>
                    <input
                        onBlur={validarName}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border-1 border-black/10 p-[13px] outline-none shadow-md rounded-[10px]"
                        type="text"
                        placeholder="Por ejemplo : Anillo"
                        required
                        minLength={3} />
                </label>
                {/* { errorName && <p>{errorName}</p>} */}
                {/* FLEX */}
                <div className="flex gap-[10px]">
                    {/* INPUT */}
                    <label className="relative w-[50%]">
                        <p className="translate-y-[18px] translate-x-[5px] inline-flex bg-white p-[5px]">Precio adquirido</p>
                        <input
                            onChange={(e) => setPrecioAdquirido(e.target.value)}
                            className="w-full border-1 border-black/10 p-[13px] outline-none shadow-md rounded-[10px]"
                            type="text"
                            placeholder="---"
                            required
                        />
                    </label>
                    {/* INPUT */}
                    <label className="relative w-[50%]">
                        <p className="translate-y-[18px] translate-x-[5px] inline-flex bg-white p-[5px]">Ganancia</p>
                        <input
                            onChange={(e) => setGanancia(e.target.value)}
                            className="w-full border-1 border-black/10 p-[13px] outline-none shadow-md rounded-[10px]"
                            type="number"
                            placeholder="---"
                            required
                        />
                    </label>
                </div>
                {/* INPUT */}
                <label className="relative w-[50%]">
                    <p className="translate-y-[18px] translate-x-[5px] inline-flex bg-white p-[5px]">Valor total</p>
                    <input
                        value={total}
                        onChange={(e) => setTotal(e.target.value)}
                        className="w-full border-1 border-black/10 p-[13px] outline-none shadow-md rounded-[10px]"
                        type="number"
                        placeholder="---"
                        readOnly />
                </label>
                {/* SELECT INPUT */}
                <label className="relative w-[50%]">
                    <p className="translate-y-[18px] translate-x-[5px] inline-flex bg-white p-[5px]">Categoria</p>
                    <select
                        onChange={(e) => setCategoria(e.target.value)}
                        className="w-full border-1 border-black/10 p-[13px] outline-none shadow-md rounded-[10px]"
                        name=""
                        id="">
                        {categoriaArray.map((element, index) => (
                            <option value={element}>{element}</option>
                        ))}
                    </select>
                </label>
                {/* ESTADO */}
                <label className="flex gap-[10px] items-center mt-[20px]">
                    <input 
                        checked={estado}
                        onChange={(e) =>setEstado(e.target.checked)}
                        className="accent-[var(--green)] w-[17px] h-[17px]" type="checkbox" />
                    <p>Estado</p>
                </label>
                <input className="bg-[var(--green)] text-white p-[13px] uppercase w-full rounded-[10px] mt-[20px] cursor-pointer" type="submit" value="Registar el producto" />
            </form>

        </>

        
    )
}