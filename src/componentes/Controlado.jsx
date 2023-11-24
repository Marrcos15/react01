import { useState } from "react";

export function Controlado({addCollection}){

    const [value,setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.currentTarget.value);
    }

    const handleSubmit = (e) => {
        // Para que no este todo el rato enviando los datos con cada evento, y solo lo aplique los cambios al guardar 
        e.preventDefault();
        addCollection(value);
        // Al hacer Submit resetea el texto del input
        setValue('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Componente Controlado</h2>
            <input type="text" value={value} onChange={handleChange} />
            <button>Envia</button>
            {value}
        </form>
    )
}