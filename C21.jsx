import { createContext } from "react";
import C22 from "./C22"
const Com1=createContext({n1:5,n2:4,n3:2})
const Com2=createContext("red")
export default function C21(){
    return(
        <>
        <C22/>
        </>
    )
}
export {Com1,Com2};