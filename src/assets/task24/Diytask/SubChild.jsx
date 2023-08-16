import { useContext } from "react";
import { Inp } from "./Context";
const SubChild = () => {
    const{name,setName} = useContext(Inp)
    return (
     <>
     <p>Subchild</p> 
     <p>{name}</p>
     <div><input type="text" onChange={(e)=> setName(e.target.value)} /></div>  
     </>
    )
} 
export default SubChild;