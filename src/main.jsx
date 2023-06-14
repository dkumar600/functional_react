import React from 'react'
import ReactDOM from 'react-dom/client'
//import ProductList from './App.jsx'
import Counter from './form2.jsx'
import Homeview from './Homeview.Layout.jsx'
//import './index.css'

/*
function MyApp() {

  return (
    <div>
      <h1>Welcome to my app</h1>
      <ProductList />
    </div>
  );
}

*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Counter />
    <Homeview />
  </React.StrictMode>,
)
