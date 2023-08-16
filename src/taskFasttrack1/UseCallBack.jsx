import React,{ useCallback, useState, useContext } from "react";
import {ThemeContext, DataContext} from '../ContextAPI'
const Now2 = (props) =>{
    const [count, setCount] = useState(0);
    const data = useContext(DataContext);
    {console.log('Children Comp', data)}

    return (
        <>
        <h1>Children Pack</h1>
        <h2>Parent : {props.count}</h2>
        <h2>Children : {count}</h2>
        <button onClick={props.setCount}>Parent Button</button>
        <button onClick={()=>setCount((prev)=>prev+1)}>Children Button</button>
        <>
        <p>
            Data Fetched:
            <ul>
                {data.map((elem)=>(<li key={elem.id}>{elem.title}</li>))}
            </ul>
        </p>
        </>
        </>
    )
}
const ReactNOW = React.memo(Now2);

const UseCallBackTest = () =>{

    const [test, setTest] = useState(0);
    const [third,setThird] = useState(0);
    const optimesed = useCallback(()=>setTest(test+1),[test]);

    const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

    const themeStyles = {
        display: 'block',
        backgroundColor: isDarkTheme ? '#333' : '#fff',
        color: isDarkTheme ? '#fff' : '#333',
    };
    // const optimesedM = useMemo(()=>{return test},[test]);
    {console.log('Parent Comp')}
    return(
        <>
        <div style={themeStyles}>
        <h1>Parent Pack</h1>
        <h2>In Parental Comp : {third}</h2>
        <h2>Parent : {test}</h2>
        <button onClick={()=>setThird((prev)=>prev+1)}>Parental Button</button>
        <ReactNOW count={test} setCount={optimesed}/>
        <button onClick={toggleTheme}>Change Theme</button>
        </div>
        </>
    )

}



export default UseCallBackTest;