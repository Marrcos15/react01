import { useRef } from "react"
import { profes } from "./profesores";

const [data] = profes.map((item) => item);
// console.log(data);
let profe1 = data.Carlos;


export function Uncontrolled(){

    const textRef = useRef();
    const handleSubmit = (e) =>{
        // Para que no se recarge la página al hacer submit
        e.preventDefault();
        const profe = textRef.current.value;
        profe1 = profe
        data.Carlos = profe1
        console.log(data)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                ref={textRef}
                type="text" 
                placeholder="Di un nombre" />
            <button> Añadir profesor </button>
        </form>
    )
}