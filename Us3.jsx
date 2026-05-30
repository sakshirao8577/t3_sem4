import { useState } from "react"
function Us3(){
    const[count,settext]=useState("LJ Uni");
    const[count1,setcolor]=useState("red");
    const[count2,showtext]=useState("Hide");
    const[hstext,sethstext]=useState("React JS");
    function changetext(){
        if(count==="LJ Uni"){
        settext("Welcome students")}
        else{
            settext("LJ Uni")
        }
    }
    function changecolor(){
        if(count1==="red"){
            setcolor("blue")
        }
        else{
            setcolor("red")
        }
    }
    function show(){
        if(count2==="Hide"){
            showtext("Show");
            sethstext(" ");
        }
        else{
            showtext("Hide");
            sethstext("React JS");
        }
    }
    return(
        <div>
            <button onClick={changetext}>Change Text</button>
            <button onClick={changecolor}>Change color</button>
            <button onClick={show}>{count2}</button>
            <h1 style={{color:count1}}>{count}</h1>
            <h2>{hstext}</h2>
        </div>
    )
}
export default Us3;