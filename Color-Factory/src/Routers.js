import ColorList from './ColorList';
import Color from './Color';
import NewColorForm from './NewColorForm';
import { Routes , Route, Navigate } from 'react-router-dom';
import React, {useState} from 'react';
import './ColorList.css';

function Routers({ colors }) {
  const [color, setColors] = useState(colors);


  const addItem = (newItem) =>{
    setColors(color => [...color, {... newItem}])
  }

  return (
    <div> 
      <Routes>  
        <Route path='/colors/:cname' element={<Color colors={ color }/>}/>
        <Route path='/colors/addcolor' element={<NewColorForm addItem={addItem}/>}/>
        <Route path='/colors' element={<ColorList colors={ color }/>}/>
        <Route path='/*' element={<Navigate to={'/colors'} />}/> 
      </Routes>      
    </div>
  );
}

Routers.defaultProps = { colors: [
  {name:"red", color:'rgb(212,37,37)'},
  {name:"green", color:'rgb(71,219,41)'}
]}

export default Routers;