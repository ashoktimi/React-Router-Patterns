import React, { useState } from "react";
import { useNavigate, NavLink  } from "react-router-dom";
import './NewColorForm.css'

const NewColorForm =({ addItem }) =>{
    const navigate = useNavigate();
    const [formData, setFormData] = useState({name:'', color:''})


    const handleSubmit = (e)=>{
        e.preventDefault();
        addItem(formData);
        navigate("/colors");

    };
    const handleChange = (evt)=>{
        const { name, value }= evt.target;
        setFormData(fData =>({
            ...fData, 
            [name]:value
        }));

    };
    return(
        <div className="NewColorForm">
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Color name</label>
            <input
                 type="text" 
                 id="name"
                 name="name" 
                 value={formData.name}
                 onChange={handleChange}
            />
          </div>
          <div>
            <label> Color: </label>
            <input
                 type="color" 
                 id="color"
                 name="color" 
                 value={formData.color}
                 onChange={handleChange}
            />
            </div>
            <div>
            <button>Add this color</button>
            </div>
        </form>
        <NavLink to={'/colors'}>Go Back</NavLink>
        </div>  
    );
}

export default NewColorForm;

