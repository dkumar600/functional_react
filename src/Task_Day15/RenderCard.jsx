import { useState,useEffect } from "react";
import axios from "axios";
import { Backdrop, CircularProgress } from '@mui/material';
import { Route, Routes } from "react-router-dom";

const CartLoader = () => {
    const [addToCart,setAddToCart] = useState([]);

    useEffect(()=>{

        axios
        .get('http://localhost:3000/cart').then((res)=> setAddToCart([...res.data]))
        .catch((err)=>console.log(err));
        
    },[])



    const HandleClose = ()=>{
        return( (
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}>
                <CircularProgress color="inherit" />
                </Backdrop>
        )

        )
    }
    const removeItem = (id) =>{
        console.log();
        axios.delete(`http://localhost:3000/cart/${id}`)
        .then((res)=> setAddToCart([...res.data]))
        .catch((err)=>console.log(err))

    }

    return(
        <>
        <a href="http://localhost:5173/"> &lt; Home</a>
        <h3>Selected Products</h3>
        {addToCart.length>0? addToCart.map((elem,index) => (
        <div className="main-card" key={index}>
            <div className="img"><img src={elem.image} alt="main-img" /></div>
            <div className="title">{elem.title}</div>
            <div className="price">$ {elem.price}</div>
            <button onClick={()=>removeItem(elem.id)}>{'Added To Cart'}</button>
        </div>
    )):(<h3>Loading...</h3>)}
        </>
    )
}

const RenderCard = () => {
    const [data,setData] = useState([]);
    const [addToCart,setAddToCart] = useState([]);
    const [trialVar,setTrialVar] = useState(false);
    // const handleCartRen = () => {
    //     const cartData = localStorage.getItem('addToCart');
    //     if(cartData !== undefined && trialVar === false){
    //         setAddToCart(JSON.parse(cartData));
    //         setTrialVar(true);
    //         console.log(1)
    //     }
    // }
    useEffect(()=>{
        axios
        .get('http://localhost:3000/products').then((res)=> {
            if(!(res.data)){
                console.log("data has received");
            }
        setData([...res.data])})
        .catch((err)=>console.log(err));

        axios
        .get('http://localhost:3000/cart').then((res)=> setAddToCart([...res.data]))
        .catch((err)=>console.log(err));
        
    },[])
    // const setLocalStorage = () =>{
    //     localStorage.setItem('addToCart',JSON.stringify(addToCart));
    // }
    const handleClick = (id, title, e) => {
        e.preventDefault();
        let a = false;
        
        for(let i=0;i<addToCart.length;i++){
            if(addToCart[i].id === id) {
                a=true;
            }
        }
        if(a===false){
            let cart = {'id':id, 'title':title, 'AddedToCart':true}
            setAddToCart((prev)=>[...prev,cart]);
            axios.post('http://localhost:3000/cart', cart)
            .then(res => {
                if(!(res.data)){
                    console.log("data has posted");
                }
                console.log(res)})
            .catch(err => console.log(err))
            
        }
        e.target.disabled=true;
        e.target.childNodes[0].data ='added to cart';
        
        //console.log(addToCart);
        //setLocalStorage();
    }
    const removeItem = (e) =>{
        let val = e.target.value;
        console.log();
        axios.delete(`http://localhost:3000/cart/${val}`)
        .then((res)=> setAddToCart([...res.data]))
        .catch((err)=>console.log(err))

    }
    const HandleClose = ()=>{
        return( (
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}>
                <CircularProgress color="inherit" />
                </Backdrop>
        )

        )
    }
    console.log(addToCart)
    return (
        <>
        
        <div>
        <a href="http://localhost:5173/Demo2">  Cart Section &gt;</a>
        <h2>Items added to cart : {addToCart.length}</h2>
        {data.length>0? data.map((elem,index) => (
            <div className="main-card" key={index}>
                <div className="img"><img src={elem.image} alt="main-img" /></div>
                <div className="title">{elem.title}</div>
                <div className="price">$ {elem.price}</div>
                <button disabled={addToCart.find((elem2)=>elem2.id==elem.id)} onClick={(e)=>handleClick(elem.id,elem.title,e)}>{addToCart.find((elem2)=>elem2.id==elem.id)?'Added To Cart':'Add to Cart'}</button>
            </div>
        )):( <HandleClose/>)}
        </div>
        <div className="remove">
        <h3>Remove From Cart</h3>
        <select value="-1" onChange={removeItem}>
            <option value="-1">choose to remove from cart</option>
            {addToCart.map((ob, index)=>(<option value={ob.id} key={index}>{ob.title}</option>))}
        </select>
        
        </div>
        </>
    )
}

const Route1 = () => {
    return(
        <Routes>
            <Route path="/" element={<RenderCard/>}/>
            <Route path="/Demo2" element={<CartLoader/>}/>
        </Routes>
    )
}

export default Route1;