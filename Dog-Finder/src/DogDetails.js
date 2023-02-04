

import React from "react";
import { Navigate, Link , useLocation } from "react-router-dom";
import "./DogDetails.css"


function DogDetails({dog}) {
  const location = useLocation();

  if (!dog) return <Navigate to="/dogs"/>

  return (
    <div className="DogDetails">
        <h1>Here's a pic of {dog.name}</h1>
        <img src={dog.src} alt={dog.name} />
        <h2>{dog.name}</h2>
        <h3>{dog.age} years old</h3>
        <ul>
          {dog.facts.map((fact, i) => (
            <li key={i}>{fact}</li>
          ))}
        </ul>
        {!(location.pathname === "/dogs")?
            <Link to="/dogs">Go Back</Link>
        : null          
        }     
    </div>
  );
}

export default DogDetails;


