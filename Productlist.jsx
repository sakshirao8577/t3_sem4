import img1 from "./assets/img1.jpg"
import img2 from "./assets/img2.jfif"
import Productcard from "./Productcard"
function Productlist(){
    var products=[{name:'Product1',price:35000,rating:4.2,image:img1},
        {name:'Product2',price:30000,rating:4,image:img2},
        {name:'Product3',price:25000,rating:3.5,image:img1}]
        return(
            <>
            <Productcard data={products}/>
            </>
        )
}
export default Productlist;