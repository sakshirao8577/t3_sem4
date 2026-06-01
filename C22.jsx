import { useContext } from "react";
import {Com1,Com2} from "./C21"
export default function C22(){
    var Num=useContext(Com1);
    // var Num2=useContext(Com1['n2']);
    // var Num3=useContext(Com1['n3']);
    // console.log(Num1,Num2,Num3)
    var C=useContext(Com2);
    var func=Num['n1']*Num['n2']/Num['n3']
   // console.lo
    return(
    <>
    
    <h1 style={{color: C}}>{func}</h1>
    </>
)
}
