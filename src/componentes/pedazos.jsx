import { useState } from 'react';
import './pedazos.css';

const bicis = ['rígida','cross','fatbike'];

// const campo = bicis[1];
// const calle = bicis[0];
const [calle, campo, nieve] = bicis;

export function Bicicalle(){
    return(
        <h1>{calle}</h1>
    )
}

export function Bicinieve(){
    return(
        <h1>{nieve}</h1>
    )
}

export function Block2({isloged}){
    return(
        <>
        {
            /* Condicional if reducido, si isloged = true -> Bicicalle,= false -> bicinieve */
            isloged ? (<Bicicalle />) : (<Bicinieve />)
        }
        </>
    )
}

export function Block(props) {
    const [type, setType] = useState("Pulsa la imagen para ver el titulo")
    if (props.isloged){
        return(
            <article className="column card">
              <img className='imagen-card'
                  src={require(`../img/3-column-${props.img}.jpg`)}
                  alt ='descripcion' 
                  onClick={() => setType(props.title)}/>
                <div className='container'>
                   <h4>{type}</h4> 
                 <p className='tipo'>{props.text} </p> 
                </div>
            </article>
    )
    } else {
        return(
            <article className="column card">
              <img 
               className='imagen-card'
                  src={require(`../img/3-column-${props.img}.jpg`)}
                  alt ='descripcion' />
                <div className='container'>
                   <h4>Contenido para socios</h4> 
                 <p className='tipo'>No tienes permisos para acceder a este contenido</p> 
                </div>
            </article>
            )
    }
}
