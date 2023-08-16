import React from 'react';
import { useState } from "react";
const ProductView = (props) => {
    const [products, setProducts] = useState([]);
  
    const onAddNewProduct = () => {
      setProducts((prevState) => {
        return [
          ...prevState,
          {
            name: props.name,
            productName : props.productName,
            price: props.price
          },
        ];
      });
    };
  
    console.log("Products: ", products);
    return (
        
      <div>
        <form>
        <input type="text" id = "name" />
        <input type="text" id = "productName" />
        <input type="text" id = "price" />
        <button onClick={handleClick}>Submit</button>
        </form>
        <button onClick={onAddNewProduct}>Add Product</button>
      </div>
    );
  };

function handleClick(e){
    e.preventDefault();
    let inpName = document.getElementById("name").value;
    let inpProduct = document.getElementById("productName").value;
    let inpPrice = document.getElementById("price").value;
    <ProductView name = {inpName} productName ={inpProduct} price ={inpPrice} />
}

const ProductInp = () => {
    const [details, setDetails] = useState({
        name : "",
        productName : "",
        price : ""
    })
    return(

        <ProductView/>
    );
};



export default ProductInp;

/**
 * Task - Create a todo list & perform the following

- There should be three component AddTodo, ListTodo, ShowTodo

- User should be able to add a todo using the form & we need to render added todo's in the list & render using child component

Create a React component called "TodoList" that receives an array of todo items as props. Each todo item should have a "title", "Description" and a "completed" property. The component should render a list of todo items, displaying the title and a checkbox to indicate whether the item is completed or not. When the checkbox is clicked, the "completed" property of the corresponding todo item should toggle.

*/