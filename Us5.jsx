import img1 from "./assets/img1.jpg"
import img2 from "./assets/img2.jfif"
import img3 from "./assets/hero.png"
import img4 from "./assets/react.svg"
import { useState } from "react"
function Us5(){
    var arr=[img1,img2,img3,img4]
    const[image,setimage]=useState(arr[0])
    function changeimage(){
        var i=Math.floor(Math.random()*arr.length)
        setimage(arr[i]);
    }
    return(
        <div>
            <img src={image} alt='image' width='300' height='300'></img>
            <button onClick={changeimage}>Change button</button>
        </div>
    )
}
export default Us5;