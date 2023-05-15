import React from 'react';
import {Link} from 'react-router-dom';

function ProductsList(props) {
    // console.log("Products:", props)
    return (
        <div className="items-list-wrapper">
            {props.products.map((product) => 
              <div className="item-card" key={product.id}>
                <Link to={`/products/${product.id}`}>
                <img className="item-list-image" src={product.image} alt={product.title}/>
                </Link>
                <p>{product.title}</p>
              </div>
            )}
        </div>
    )
}

export default ProductsList;