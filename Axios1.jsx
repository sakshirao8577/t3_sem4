import { useEffect,useState } from "react";
import axios from "axios"
// https://randomfox.ca/floof/
export default function Axios1(){
    const [image,setimage]=useState("");
    useEffect(()=>{
        setInterval(()=>{
            axios
            .get("https://randomfox.ca/floof/")
            .then((r)=>{console.log(r.data);setimage(r.data)})
            .catch((e)=>{console.log(e)})
        },5000)
    },[])
    return(
        <>
        <img src={image.image} alt='fox' width='500' height='500'/>
        <a href={image.link} target='_blank'>Click here</a>
        </>
    )
}