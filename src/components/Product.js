import React from 'react';
import "./Product.css";

function Product({ id, title, image, rating, price }) {
    return (
        <div className='product'>
            <div class="product__info">
                <p>{title}</p>
                <p className='product__price'>
                    <small>€</small>
                    <strong>{price}</strong>
                </p>
                <div class="product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <p>&#11088;</p>
                            ))
                    }
                </div>
            </div>
            <img src={image} alt='' />
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
