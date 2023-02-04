
import React from "react";
import DogDetails from './DogDetails';
import "./DogList.css"

function Dogs({ dogs }) {

  return (
    <div className="DogList">
        {dogs.map((d, i) =>{
            return <DogDetails dog={d} key={i} />;
        })}
      
    </div>
  );

}
export default Dogs;