import React from "react";
import { NavLink } from "react-router-dom";

const ColorList =({ colors }) =>{

    return(        
        <div className="ColorList">    
            <header className="ColorList-header">        
            <h2>Welcome to the color factory.</h2>
            <NavLink to={'/colors/addcolor'}>Add a color</NavLink>          
            </header>
            <p>Please select a color.</p>
            {colors.map((color, i) =>{
            return  (
                 <NavLink 
                    key={color.name} 
                    to={`/colors/${color.name}`}
                >
                    <li>{color.name}</li>
               
                </NavLink>
            )
        })}         
        </div>
    )
}

export default ColorList;