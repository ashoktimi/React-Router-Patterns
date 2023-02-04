import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import './Color.css'

const Color =({ colors }) =>{
    const { cname } = useParams();
     
    let colorValue  = colors.find((c) =>{
        if(c.name.toLowerCase() === cname.toLowerCase()){
            return c
        }
        return null;
    });
    useEffect(() => {
      document.body.style.backgroundColor= `${colorValue.color}`;
      return () => {
        document.body.style.backgroundColor = '';
      };
    }, [`${colorValue.color}`, cname, colors]);
      
    return(
        <div className="Color">
            <h1>THIS IS {cname.toUpperCase()}.</h1>
            <h1>ISN'T IT BEAUTIFUL?</h1>
            <NavLink to={'/colors'}>GO BACK</NavLink>
        </div>
    )
}

export default Color;