import React from "react";


function Button({color,onClick}){
    return(
        <button className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
        style ={{
            backgroundColor:color,
        }}
        onClick={onClick}
        >{color}</button>
    )
}

export default Button;