import { useReducer } from "react";
import img1 from "./assets/img1.jpg"
import img2 from "./assets/img2.jfif"
function reducer(state,action){
    if(action.type==="cha"){
        if(state===img1){
             return img2;
        }
        else{
            return img1;
        }
    }
}
function Ur3(){
    const[state,dispatch]=useReducer(reducer,img1)
    return(
        <>
         <img src={state} alt='image' width='300' height='300'></img>
        <button onClick={()=>dispatch({type:"cha"})}>Change Image</button>
        </>
    )
}export default Ur3;