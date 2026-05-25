function Events1(){
    const handleclick=(n)=>{
        alert(`Welcome ${n}`)
    }
    return(
        <>
        {/* <button onClick={handleclick}>Click here</button>
        <button onClick={()=>handleclick()}>Click here</button> */}
        <button onClick={()=>handleclick("ABC")}>Click here</button>
        </>
    )
}export default Events1;