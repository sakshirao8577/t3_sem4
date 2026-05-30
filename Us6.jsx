import { useState } from "react"
function Us6(){
    const[task,settask]=useState(" ")
    const[todolist,settodolist]=useState([]);
    function addtask(){
        settodolist([...todolist,{id:Date.now(),name:task}])
        settask(" ");
    }
    function removetask(id){
        settodolist(todolist.filter((t)=>t.name!==id))
    }
    return(
        <div>
            <input type="text" value={task} onChange={(e)=>settask(e.target.value)}></input>
            <button onClick={addtask} >Add</button>
            {
                todolist.map((t)=>
                <div key={t.id}>
                    <h3>{t.name}</h3>
                    <button onClick={()=>removetask(t.name)}>Delete</button>
                </div>)
            }
            
        </div>
    )
}
export default Us6;