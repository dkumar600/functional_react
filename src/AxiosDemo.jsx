import axios from "axios";
import { useEffect, useState } from "react";

const AxiosDemo = () => {
    const [data1,setData1] = useState([]);
    
        useEffect(()=>{
            axios
            .get('https://fakestoreapi.com/products').then((res)=> setData1([...res.data]))
            .catch((err)=>console.log(err));
            
        },[])
        
        

        
    return data1;
}

export default AxiosDemo;