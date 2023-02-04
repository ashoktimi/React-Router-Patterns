import React from 'react';
import { useParams } from 'react-router-dom';
import DogDetails from './DogDetails';

function FilterDogDetails({dogs}) {
  const {name} = useParams();

  if(name){
    let result = dogs.find((d) =>{
        if(d.name.toLowerCase() === name.toLowerCase()){
            return d;
        }
        return null;
    });
    return <DogDetails dog={result} />;
  }
 
}

export default FilterDogDetails;