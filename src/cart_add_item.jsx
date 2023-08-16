import { useState } from "react";

const Cart = (props) => {
    console.log("Inside Cart: ", props);
  
    let totalPrice = 0;
    for (let i = 0; i < props.siddhant.length; i++) {
      totalPrice += props.siddhant[i].price;
    }
  
    return (
      <div>
        <p>
          Total Proce of {props.siddhant.length} elements is {totalPrice}
        </p>
      </div>
    );
  };

const ProductView = () => {
  const [products, setProducts] = useState([]);

  const onAddNewProduct = () => {
    setProducts((prevState) => {
      return [
        ...prevState,
        {
          name: "ABC",
          price: Math.floor(Math.random() * 200) + 1,
        },
      ];
    });
  };

  /*   const onAddNewProduct2 = () => {
    setProducts((prevState) => [
      ...prevState,
      {
        name: "ABC",
        price: Math.floor(Math.random() * 200) + 1,
      },
    ]);
  }; */

  console.log("Products: ", products);
  return (
    <div>
      <button onClick={onAddNewProduct}>Add Product</button>
      <Cart siddhant={products} />
    </div>
  );
};

export default ProductView;
