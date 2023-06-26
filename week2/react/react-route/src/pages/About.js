import { useState } from "react";
import React from "react";
import {Link, useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
const [search, setSearch] = useState("");
    const onChange = (event) => {
        console.log(event.target.value);
        setSearch(event.target.value);
    }

    const onSubmit =(event) =>{
         event.preventDefault();
         navigate(`/search?query=${search}`); 
    }
  return (
    <div>
      <h2>About</h2>
      <form onSubmit={onSubmit}>
        <input type="text" value={search} onChange={onChange} placeholder="you wanna go to...?" />
        <button type="submit">search</button>
      </form>
    </div>
  );
};

export default About;
