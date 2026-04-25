import React from "react";


export const ProductosTable = ({users}) => {
    return(
        <>
        <section className="w-[70%]">
            <div className="h-[70px] grid grid-cols-8 w-full py-[20px] border-b-1 border-black/30">
                <p>ID</p>
                <p>Nombre</p>
                <p>Nombre</p>
                <p>Precio</p>
                <p>Ganancia</p>
                <p>Total</p>
                <p>Categoria</p>
                <p>Estado</p>
            </div>
            {users.map((element, index) => (
                <div className="h-[70px] grid grid-cols-8 w-full py-[20px] border-b-1 border-black/30">
                    <p>{(index+1)}</p>
                    <p>{element.name}</p>
                    <p>{element.precioAdquirido}</p>
                    <p>{element.ganancia}</p>
                    <p>{element.total || "No aplica"}</p>
                    <p>{element.categoria || "no aplica"}</p>
                    <p
                        className={` text-white flex justify-center py-[3px] rounded-[7px] ${element.estado ? "bg-blue-600" : "bg-red-600" } `}
                        >
                        {element.estado ? "Activo" : "No activo"}
                    </p>
                </div>
                
            ))}

        </section>
        </>
    )
}