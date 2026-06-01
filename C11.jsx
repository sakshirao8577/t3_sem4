import { createContext } from "react";
import C2 from "./C12"
const Fname=createContext();
const Lname=createContext();
export default function C1(){
    return(
        <>
        <Fname.Provider value="Nidhi"><Lname.Provider value="Seta"><C2/></Lname.Provider></Fname.Provider>
        </>
    )
}
export {Fname,Lname};