import React from "react";
import {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Message from "./message";
import Todo from "./todo";



function App(){
  let tasks =[
    {name: "Clean your room"},
    {name:"Read two books"},
    {name:"Re-fill storage room"}
  ]




  return (
    <div>
      <Todo data={tasks} />
      {/* <Counter /> */}
    </div>
  )

}


export default App;