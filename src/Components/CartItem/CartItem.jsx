import React, { useContext } from 'react'
import'./CartItem.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
const CartItem = () => {
    const{ getTotalCartAmount, all_product,cart,setCart,addToCart,removeFromCart,clearCart,totalPrice,totalItems}= useContext(ShopContext);
  return (
    <div className='cartitem'>
        <div className="cartitem-format-main">
            <p>Products</p>
            <p>TItle</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
    
        </div>
        <hr />
        {all_product.map((e)=>{
            if(cart[e.id]>0)
            return(
                <>
                <div className="cartitem-format cartitem-format-main ">
                    <img className='carticon-product-icon' src={e.image} alt=""  />
                    <p className='name'>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartitems-quantity'>{cart[e.id]}</button>
                    <p>${e.new_price*cart[e.id]}</p>
                    <img className='remove-icon' src={remove_icon} alt='remove' onClick={()=>removeFromCart(e.id)}/>
                
                </div>
                   <hr /> 
               
          </>  )
          return null;
        })}
       <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>cart Totals</h1>
            <div>
                <div className="cartitems-total-item">
                   <p>Subtatal</p> 
                   <p>{totalItems}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Shipping</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className='cartitems-total-item'>
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()} </h3>
                </div>

            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
            <p>If you have a promo code, Enter it here </p>
            <div className='cartitems-promobox'>
              <input type="text" placeholder='promo code' />  
              <button>Apply</button>
            </div>
        </div>



       </div>

    </div>
  )
}

export default CartItem