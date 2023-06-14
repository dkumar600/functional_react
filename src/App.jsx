//import './App.css'
/*
function MyButton() {

  return (
    <button>
      I'm a button
    </button>
  );
}

export default MyButton
*/
const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];
// Why There is key and what is this key
// Tell what is the main use of {}

function ProductList (){
  let productStr=[];
  for(let i=0;i<products.length;i++) {
    productStr.push(<li key={products[i].id}>
      {products[i].title}
    </li>)
  }
  return (
    <ul>
      {productStr}
    </ul>
  )
}

export default ProductList;


