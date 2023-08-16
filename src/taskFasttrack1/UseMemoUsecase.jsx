//https://fakestoreapi.com/products

import { useEffect, useState,useMemo } from "react";
import axios from 'axios';
const UseMemoU = () => {
    const [data,setData] = useState([]);
    //const [filtered,setFiltered] = useState([]);
    const [input,setInput] = useState("");

    //Original Data
    //Original Data -> filter -> filtered Data
    
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res=>{setData(res.data);});
        
    },[]);
    const filtered = useMemo(()=>{
        let nowDATA = data.filter(elem => {
            return elem.title.toLowerCase().includes(input);
        })
        return [...nowDATA];
    },[input,data])
    console.log('reRender');
    return (
    <>
    <p>useMemoU</p>
    <input type="text" onChange={(e)=> setInput(e.target.value)} />
        <ul>
        {filtered.map(elem => (<li key={elem.id}>{elem.title}</li>))}

        </ul>
        </>
    );
}
export default UseMemoU;