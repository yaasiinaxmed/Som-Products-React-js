import React from 'react';
import { useParams } from 'react-router-dom';

function ProductCard(props) {
    const params = useParams();
    // console.log(params.id);

    const productSelected = props.products.find((product) => product.id === Number(params.id));
    console.log(productSelected)

    return (
        <div className='item-wrapper'>
            <div className='item-header'>
                <div className='image-wrapper'>
                    <img src={productSelected.image} style={{height: '400px'}} alt={productSelected.title} />
                </div>
                <div className='item-title-wrapper'>
                    <h2>{productSelected.title}</h2>
                    <h4>Price: ${productSelected.price}</h4>
                    <p className='item-desription'>{productSelected.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;