

import React from "react";

function Counter(){
    const [count,setCount] = useState(0)
    
    function increase(){
      setCount(count+1);
    }
    function decrease(){
      setCount(count-1);
    }
    
    
      return(
        <div class="container card p-4">
        <div className="fs-1">Counter is: {count}</div>
        <div className="row my-4">    
          <div className="col-6 text-center">
            <button className="btn btn-primary" onClick={increase}>Increase by 1</button>
            </div>
            <div className="col-6 text-center">
            <button className="btn btn-primary" onClick={decrease}>Decrease by 1</button>
            </div>
         
     
        </div>
        <Message msg="Hey, Im speaking from the counter app."/>
    </div>
    
      );
    }

    export default Counter;