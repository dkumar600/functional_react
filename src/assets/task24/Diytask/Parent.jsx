import { useContext, useState } from "react";
import Child from "./Child"
import { ContextProvider } from "./Context";

const Parent = () => {
    const [inp,setInp] = useState("");
    return(
        <>
        <ContextProvider value={{name:inp,setName:setInp}}>
        <p>Parent</p>
        <p>{inp}</p>
        <Child/>
        </ContextProvider>
        </>
    )
}
export default Parent;