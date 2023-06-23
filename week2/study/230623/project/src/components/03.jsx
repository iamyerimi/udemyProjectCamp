import React from "react";


function Greeting(props){
  return <h1>Have a nice day, {props.name}! </h1>
}

function Practice03() {

  return (
    <>
    <p>this is a Practice03</p>
     <Greeting name="yerim" />
    </>
  );
}

export default Practice03;
