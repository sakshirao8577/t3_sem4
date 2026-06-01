import { useContext } from "react";
import {Fname,Lname} from "./C11"
export default function C3(){
    var fn=useContext(Fname);
    var ln=useContext(Lname);
    return(
    <>
    <h1>Welcome {fn} {ln}</h1>
    </>
)
}
