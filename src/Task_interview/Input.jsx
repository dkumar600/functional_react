import { useState } from "react";
import styled from 'styled-components';

const Div = styled.div`
        display:flex;
        flex-directon:column;
    `;

const InputField = () => {
    
    const [ArrayMaker, setArrayMaker] = useState([]);
    const [sum, setSum] = useState(0);
    const [arr, setArr] = useState([]);
    function handleClick(e) {
        e.preventDefault();
        let a = e.target.arrayMaker.value;
        console.log(a);
        setArr([]);
        for(let i=0;i<a;i++){
            setArr((prev)=>[...prev, "array"+i]);
        }
    }
    function handleArray(e){
        e.preventDefault();
        let s=0;
        for(let i=0;i<ArrayMaker.length;i++){
            s+=parseInt(ArrayMaker[i]);
        }
        setSum(s);
        setArrayMaker([]);
    }
    function inputA(e){
        let a = e.target.value;
        setArrayMaker((prev)=>[...prev,a]);
        setSum((prev)=>prev+parseInt(a));
        console.log(ArrayMaker)
        e.target.value="";
    }
    return(
        <Div>
        <div>
        <form onSubmit={(e) => handleClick(e)}>
        <input type="text" name="arrayMaker" /> <br/>
        <button type="submit">Make Input Field</button>
        </form>
        </div>
        <br />
        <div>
        <form onSubmit={(e) => handleArray(e)}>
        {
            arr.map((item)=>(<><input type="text" name={"array"+item} onBlur={(e) => inputA(e)} key={item}/><br/></>))

        }
        <button type="submit">Submit</button>
        </form>
        <h3>{sum}</h3>
        </div>
        </Div>
        
    )
}
export default InputField;