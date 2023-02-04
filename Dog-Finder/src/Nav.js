import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css'

function Nav({ dogs }) {
 
let links = (dogs.map(d => (
   <NavLink key={d.name} to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</NavLink>
   )))


  return (
      <nav>
        <NavLink  to="/dogs">Home</NavLink>
        {links}
      </nav>
  );

}
export default Nav;

