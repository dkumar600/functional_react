import { useState } from "react";
import { useNavigate } from "react-router-dom"
const LoggedOut = () => {
    const navigate = useNavigate();
    const[status,setStatus] = useState({Status:0});
    function loggIn (){
        setStatus((prev) => prev.Status === 0 ? 1 : 0 );
        localStorage.setItem("Status", JSON.stringify(status));
    }
    return(
        <>
        <p>Welcome! tap on button to Start Session</p>
        <button onClick={()=>navigate('./LoggedIn')}>Login</button>
        </>
    )
}
export default LoggedOut;