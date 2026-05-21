import Child from "./child"
function Parent(){
    var obj={name:"virat",clg:"LJ University"}
    return(
        <>
         {/* <Child name='pqr' age='21' />
         <Child name={a} age={22} ></Child> */}
        <User data={obj}/>
        </>
    )
}
function User(props){
    return(
        <>
        <h1 style={{color:'blue',textTransform:'uppercase',textDecoration:'underline'}}>
            Welcome {props.data.name} to {props.data.clg}
        </h1>
        </>
    )
}
export default Parent;