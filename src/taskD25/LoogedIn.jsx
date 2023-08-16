import { useState } from "react";
import { useNavigate } from "react-router-dom"

const LoggedIn = () => {
    const navigate = useNavigate();
    const[status,setStatus] = useState(JSON.parse(localStorage.getItem("Status")));
    function loggIn (){
        setStatus((prev) => prev.Status === 0 ? 1 : 0 );
        localStorage.setItem("Status", JSON.stringify(status));
    }
    return(
        <>
        <p>your session has started</p>
        <button onClick={()=>navigate(-1)}>LogOut</button>
        </>
    )
}
export default LoggedIn;