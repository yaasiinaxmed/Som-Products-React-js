import React, {useEffect, useState}  from "react";
import axios from 'axios';
import Home from "./components/Home";
import ProductsList from "./components/products/ProductsList";
import ProductCard from "./components/products/ProductCard";

import {Route, Link, Routes} from 'react-router-dom';

function App() {

  const [products, setProducts] = useState({});

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products') 
     .then((res) => {
      //  console.log("Response",res.data)
       setProducts(res.data);
     }) 
     .catch((err) => {
       console.log(err)
     })
          
  }, [])

  return (
    <div className=" App">
      <nav>
        <h1 className="store-header">
          <Link to='/' className="title">Som Products</Link>
        </h1>
        <div className="nav-links">
         <Link to="/">Home</Link>
         <Link to="/products">Shop</Link>
      </div>
      </nav>
      <Routes>
         <Route path="/products/:id" element={<ProductCard products={products}/>}></Route>
         <Route path="/products" element={<ProductsList products={products}/>}></Route>
         <Route path="/" element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
