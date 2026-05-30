import { useState} from "react";
function Form2(){
    const[formdata,setformdata]=useState({});
    function handlechange(e){
        const{name,value}=e.target;
        setformdata({...formdata,[name]:value});
    }
    function handlesubmit(e){
        e.preventDefault();
        //if(!formdata.un || !formdata.eid || !formdata.pass || !formdata.cpass || !formdata.n)
        if(formdata.pass===formdata.cpass && formdata.pass.length>=8 && formdata.num.length==10){
        alert(`Thank you! Welcome ${formdata.un}`)
        }
        else{
            alert('Invalid input')
        }
    }
    return(
        <form onSubmit={handlesubmit}>
            <label>Username</label>
            <input type='text' name="un" onChange={handlechange} required></input><br></br>
            Email:<input type='email' name='eid' onChange={handlechange} required></input><br/>
            Password:<input type='password' name='pass' onChange={handlechange}required></input><br/>
            Confirm Password:<input type='password' name='cpass' onChange={handlechange} required ></input><br/>
            Contact:<input type='number' name='num' onChange={handlechange} required/><br/>
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
export default Form2