import React, {memo, useMemo} from "react";
const ChildC = (props) => {

    console.log("child")
    //useMemo : use it to avoid heavy calculation during automatic rerendring
    // let num = 0;
    // for(let i =0;i<500000000;i++){
    //     num++
    // }
    // let num=0;
    // num = useMemo(()=>{
    //     let output1=0;
    //     for(let i=0;i<500000000;i++){
    //         output1++;
    //     }
    //     return output1
    // },[num])
    // it is not rendering everytime only running when value of num is changed
    return(
        <>
        {/* {console.log("Child Component")} */}
        <h1>h</h1>
        <button onClick={props.setFunc}>click to child</button>
        </>
    )
}
export default React.memo(ChildC);
//it means if you are not passing any data then react.memo will wrk.
