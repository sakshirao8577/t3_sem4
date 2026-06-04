import { useEffect,useState } from "react";
import axios from "axios"
// https://randomfox.ca/floof/
export default function Axios2(){
    const [image,setimage]=useState("");
    useEffect(()=>{
        setInterval(()=>{
            axios
            .get("https://dog.ceo/api/breeds/image/random")
            .then((r)=>{console.log(r.data);setimage(r.data)})
            .catch((e)=>{console.log(e)})
        },5000)
    },[])
    return(
        <>
        <button onClick={()=>setimage(image)}>Click here</button>
        <img src={image.message} alt='fox' width='500' height='500'/>
       
        </>
    )
}