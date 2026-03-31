import { useState } from "react";
function CounterUseState(){
    const [count,setCount]=useState(0);
    return(
        <div>
            <h2>useState Counter</h2>
            <p>{count}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    );
}
export default CounterUseState;