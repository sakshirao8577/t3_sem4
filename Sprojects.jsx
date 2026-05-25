function Sprojects(props){
    return(
        <div>
            {props.data.map((d,i)=>
                <div key={i}>
                    <h1>Project Name:{d.name}</h1>
                    <h4>Desc:{d.desc}</h4>
                    <img src={d.image} width="400"/>
                </div>
            )}
        </div>
    )
}
export default Sprojects