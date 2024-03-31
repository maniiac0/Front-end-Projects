import React from "react";
import {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Counter(){
const [count,setCount] = useState(0)

function increase(){
  setCount(count+1);
}
function decrease(){
  setCount(count-1);
}


  return(
    <div class="container-lg card">
    <div >Counter is: {count}</div>
    <div className="row">    
      
      <button className="btn btn-primary" onClick={increase}>Increase by 1</button>
      <button className="btn btn-primary" onClick={decrease}>Decrease by 1</button>
 
    </div>
</div>

  );
}

export default Counter;