import React, {useState} from "react";

const message = {
    msg: 'Mi nuevo contador',
    author: 'Marcos'
}

export function GetMessage() {
    const [check, setCheck] = useState(false);
    return (
        <>
            <h2>{message.msg}</h2>
            <h4>{message.author}</h4>
                {/* El método tiene 3 parametros, variable, espaciado y indexación */}
            <pre> { JSON.stringify(message, null, 4) }</pre>
            
                <input type="checkbox" value={check} onChange={ () =>
                    // Cuando cambie check es lo contrario a check
                    setCheck((check) => !check)
                }/>
                <label> { check ? "check" : "no check" }
            </label>
        </>
    )
}