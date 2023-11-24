import React, {useState, useEffect} from "react";
import { GetMessage } from "./componenteJson";
import { Uncontrolled } from "./Uncontrol";

export function Counter(){
    const [type, setType ] = useState(0);
    const [count, setCount] = useState(0);

    useEffect( () => {
        document.title = `Página con ${count} clicks`;
    } /* Si no cambia el valor de type o count no se ejecuta la función useEffect*/
    , [type,count])

    return(
        <>
            <Uncontrolled />
            <GetMessage />
            <h2> El contador está a {type}</h2>
            <button onClick={() => {
                setType(type + 1);
                setCount(count + 1);}}> 
            + 1 </button>
            <button onClick={ () => {
                setType(type - 1);
                setCount(count + 1);}}> 
            - 1 </button>
            <button onClick={() => {
                setType(0);
                setCount(0);}}>
            Reset </button>
            <button onClick={() => {setCount(count + 1);}}>Solo count</button>
            <h2>Has hecho click {count} veces</h2>
        </>
    )
}


// export class Counter extends React.Component{
    // /* Con esto decimos que el estado del componente que almacene sea = 0 */
    // state = { contador : 0 }

    // render(){
        // return( 
            // <>
                /* <h2> El contador está a {this.state.contador}</h2> */
                /* <button onClick={() => this.setState({ contador : this.state.contador + 1})}>  */
                /* + 1 </button> */
                /* <button onClick={() => this.setState({ contador : this.state.contador - 1})}>  */
                /* - 1 </button> */
                /* <button onClick={() => this.setState({ contador : this.state.contador = 0})}>  */
                /* Reset </button> */
            /* </> */
        // )
    // }
// }