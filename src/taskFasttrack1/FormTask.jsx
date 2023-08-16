import { Input } from "@mui/material";
import { useRef,forwardRef } from "react"

export const formIMP = (props,ref)=>{
    return(<input {...props} ref={ref} />)
}
const FormIMP1 = forwardRef(formIMP);
export const FormTask = ()=>{
    const username = useRef();
    const password = useRef();
    const button = useRef();
    const enterData = ()=>{
        console.log(username.current.value);
        console.log(password.current.value);
        button.current.style.color='red'

    }
    
    return(
        <>
        <input type="text" placeholder="username" ref={username} />
        <FormIMP1 type={"text"} placeholder={"password"} ref={password} />
        <button ref={button} onClick={enterData}>Enter</button>
        </>
    )


}