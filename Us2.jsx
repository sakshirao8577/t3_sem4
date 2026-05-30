import { useState } from "react"
function Us2(){
    const[count,setcount]=useState(20);
    function inccount(){
        if(count<50){
        setcount(count+1);}
    }
    function deccount(){
        if(count>0){
        setcount(count-1)}
    }
    // onClick={()=>setcount(count+1)}
    return(
        <div>
            <h1>useState Example</h1>
            <button onClick={inccount}>Click to increase the count</button>
            <button onClick={deccount}>Click to decrease the count</button>
            <h2>Count:{count}</h2>
        </div>
    )
}
export default Us2;