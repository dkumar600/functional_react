import { useCallback, useState } from "react"
import ChildC from "./ChildC";

const MainC = () =>{
    const [ count, setCount] = useState(0);
    const optimizeF = useCallback(()=> setCount(p => p+1),[count])
    //console.log("parent")
    const[input,setInp] = useState("");
    return (
        <>
        <h1>This is test component</h1>
        {/* <h2>{count}</h2> */}
        {/* <ChildC/> */}
        <input type="text" onChange={(e)=>setInp(p => e.target.value)} />
        <ChildC setFunc={optimizeF}/>
        <button onClick={()=>{ setCount(prev => prev + 1)}}>Increase count</button>
        </>
    )
}
export default MainC; 