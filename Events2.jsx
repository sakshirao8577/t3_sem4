function Events2(){
    const handlesubmit=(e)=>{
        e.preventDefault();
        var u=document.getElementById("un").value;
        alert(`Hello ${u}`)
    }
    function handlechange(e){
        document.getElementById("test").innerHTML=e.target.value;
        console.log(e.target.value)
    }
    function handledoubleclick(){
        document.getElementById("test1").innerHTML="You clicked twice"
    }
    return(
        <div>
            <h1>Handle events example</h1>
            <form onSubmit={handlesubmit}>
                <input onChange={handlechange} id="un" />
                <input type="submit"/>
            </form>
            <h2 id="test"></h2>
            <button onDoubleClick={handledoubleclick}>Click here</button>
            <h2 id="test1"></h2>
        </div>
    )
}export default Events2;