import React from 'react'
import'./RelatedProducts.css';
import data_product from'../Assets/data';
import Item from '../Item/Item';

const RelatedProducts = () => {
  return (
    <div className='RelatedProducts'>
        <h2>Related Products</h2>
        <hr/>
        <div className="related-products-container">
            {data_product.map((item, i) => {
                return (
                   <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}> </Item>
                   

                            )
            })}

 
        </div>

    </div>
  )
}

export default RelatedProducts