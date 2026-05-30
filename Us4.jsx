import img1 from "./assets/img1.jpg"
import img2 from "./assets/img2.jfif"
import { useState } from "react"
function Us4(){
    const[image,setimage]=useState(img1);
    function handleimage(){
        if(image===img1){
            setimage(img2);
        }
        else{
            setimage(img1);
        }
    }
    return(
        <div>
            <img src={image} alt='image' width='300' height='300'></img>
            <button onClick={handleimage}>Change button</button>
        </div>
    )
}
export default Us4;