import { useState } from "react"
import { Controlado } from "./Controlado";
import { Central } from "./ControladoCentral";


export const ElPadre = () => {
    const [collection, setCollection] = useState(['Primero']);

    const addCollection = (valor) => {
        //SE añade lo nuevo y se mantiene lo anterior
        setCollection([...collection, valor])
        // Sentido inverso: setCollection([valor, ...collection])
    }
    return(
        <>
            <Controlado addCollection={(valor) => addCollection(valor)} />
            <p>La colección es : {collection.toString()}</p>
            {/*console.log(collection)*/}
            {
                collection.map((singleCollect) => (
                   <Central key={singleCollect} collect={singleCollect} />
                ))
            }
        </>
    )
}