import React, { useContext } from 'react'
import'./ProductDisplay.css';
import star_icon from '../Assets/star_icon.png'
import start_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const{ product}=props;
    const {addToCart}=useContext(ShopContext);
    


  return (
    <div className='ProductDisplay'>
        <div className="productdisapaly-left">
            <div className="productdispaly-img-list">
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
            </div>
            <div className="productdispaly-img">
                <img className='productdisplay-main-img' src={product.image} alt=''/>

            </div>


        </div>
        <div className="productdisapaly-right">
            <h1>
            {product.name}
            </h1>
            <div className="productdisplay-right-star">
                <img src={star_icon } alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon}  alt=''/>
                <img src={start_dull_icon}  alt=''/>
                <p>(122)</p>
                

            </div>
            <div className="productdisplay-right-price">
                <div className="productdisplay-right-price-old">
                    ${product.old_price}</div>
            </div>
            <div className="productdisplay-right-price-new">
                ${product.new_price}
    </div>
    <div className="productdisplay-right-description">
        A lightweight, usually very simple product description that can be used to display products without having to worry about formatting them yourself and not having to worry about formatting them about 


    </div>
     <div className="productdisplay-right-size">
         <h1>Select Size</h1>
         <div className="productdisplay-right-size-list">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>xxl</div>
         </div>
     </div>
     <button  onClick={()=>{addToCart(product.id)}} className='btn'>ADD To CART</button>
     <p className='productdisplay-right-category'>
        <span>Category :</span>
       Man T-shirt Crop Top
     </p>
     <p className='productdisplay-right-category'>
        <span>Tags :</span>
        Modern Latest 
     </p>
 
        </div>  

    </div>
  )
}

export default ProductDisplay