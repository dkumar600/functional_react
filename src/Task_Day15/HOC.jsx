import { useEffect, useState } from "react";



const Main = () => {
    const [LoggedIn, setLoggedIn] = useState(false);
    const [details, setDetails] = useState({username:"dktiwary007",password:"doYourWorkIdiot"})
    const handleLoad = () => {
        const Data = localStorage.getItem('loggedIn');
        if(Data !== undefined){
            setLoggedIn(JSON.parse(Data));
        }
    }
    useEffect(()=>{
        handleLoad();
    },[])
    return(
        <>
        <h2>main page</h2>
        {LoggedIn?(<LoggerPage/>):(<LoginP details={details} loggedIn={LoggedIn} setter={setLoggedIn} />)}
        </>
    );
}
function submitForm(details,loggedIn,setter,e){
    e.preventDefault();
    let username = e.target.username.value;
    let password = e.target.password.value;
    console.log(details);
    if(username===details.username && password===details.password){
        setter(()=>true)
        localStorage.setItem('loggedIn',JSON.stringify(true))
    
    }else if(username===details.username||password===details.password){
        console.log("Wrong Password or Username");
    }
}
const LoggerPage = () => {
    return(
        <h1>Yahi Hai Jisko Banana Tha</h1>
    )
}

const LoginP = (props) => {
    return (
        <form onSubmit={(e) => submitForm(props.details,props.loggedIn,props.setter,e)}>
            <label htmlFor="username">
                Username: <input type="text" name="username" />
            </label> <br />
            <label htmlFor="password">
                Password: <input type="password" name="password" />
            </label> <br/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Main;