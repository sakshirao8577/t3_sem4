import { useState} from "react";
function Form1(){
    const[formdata,setformdata]=useState({});
    function handlechange(e){
        const{name,value}=e.target;
        setformdata({...formdata,[name]:value});
    }
    function handlesubmit(e){
        e.preventDefault();
        alert(`Thank you! Welcome ${formdata.un}`)
    }
    return(
        <form onSubmit={handlesubmit}>
            <label>Username</label>
            <input type='text' name="un" onChange={handlechange}></input><br></br>
            Email:<input type='email' name='eid' onChange={handlechange}></input><br/>
            Password:<input type='password' name='pass' onChange={handlechange}></input><br/>
            Confirm Password:<input type='password' name='cpass' onChange={handlechange}></input><br/>
            Data:<textarea name='msg' onChange={handlechange} ></textarea><br/>
            <label>Gender</label>
            <input type='radio' name='gender' value='male' onChange={handlechange} />Male
            <input type='radio' name='gender' value='female' onChange={handlechange}/>Female<br/>
            <label>Hobby</label>
            <input type='checkbox' name='hobby' value='cricket' onChange={handlechange}/>Cricket<br/>
            <input type='checkbox' name='hobby' value='hockey' onChange={handlechange}/>Hockey<br/>
            <input type='checkbox' name='hobby' value='yoga' onChange={handlechange}/>Yoga<br/>
            <input type='checkbox' name='hobby' value='reading' onChange={handlechange}/>Reading<br/>
            <select name="city" onChange={handlechange}>
                <option value=" ">Select</option><br/>
                <option value='ahm'>Ahmedabad</option><br/>
                <option value='rajkot'>Rajkot</option><br/>
            </select>
            <input type='submit'></input>
        </form>
    )
}
export default Form1