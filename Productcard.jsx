function Productcard(props){
    return(
        <>
        <table border='2px'>
            <tr>
                <th>Name</th>
                <th>Image</th>
                <th>price</th>
                <th>Rating</th>
            </tr>
            {props.data.filter((p)=>p.rating>=4).map((p)=>
            <tr>
                <td>{p.name}</td>
                <td><img src={p.image} width='100'></img></td>
                <td>{p.price}</td>
                <td>{p.rating}</td>
            </tr>
            )}
        </table>
        </>
    )
}export default Productcard