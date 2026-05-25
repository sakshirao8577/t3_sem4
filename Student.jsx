import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import Sprojects from "./Sprojects"
import Shome from "./Shome"
import Snopage from "./Snopage"
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jfif"
import hero from "../assets/hero.png"
function Student(){
    const s=[{name:"ABC",desc:"Test",image:img1},
        {name:"PQR",desc:"Test2",image:img2},
        {name:"XYZ",desc:"Test2",image:hero}
    ]
    return(
        <div>
            <Router>
             <ul>
                <li><Link to="/">Home</Link> </li>
                <li><Link to="/projects">Projects</Link> </li>
            </ul> 
            <Routes>
                <Route path="/" element={<Shome/>}/>
                <Route path="/projects" element={<Sprojects data={s}/>}/>
                <Route path="*" element={<Snopage/>}/>
            </Routes>
            </Router>
        </div>
    )
}export default Student