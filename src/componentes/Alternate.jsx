import { useState } from "react"

export function Alternate(){
    
    const [title1Visible, setTitle1Visible] = useState();
    const [title2Visible, setTitle2Visible] = useState(false);

    const handleButton1Click= ()=>{
        setTitle1Visible( (IsVisible) => !IsVisible);
        setTitle2Visible(false);
    }

    const handleButton2Click= ()=>{
        setTitle2Visible( (IsVisible) => !IsVisible);
        setTitle1Visible(false)
        
    }

    return(
        <div>
            <button onClick={handleButton1Click}>Título 1</button>
            <button onClick={handleButton2Click}>Titulo 2</button>
            { (title1Visible) ? <h1>Este es el titulo 1</h1> : "" }
            { (title2Visible) ? <h1>Este es el titulo 2</h1> : "" }
        </div>
    )
}