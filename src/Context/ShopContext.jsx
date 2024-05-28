import React, { createContext ,useState} from 'react'
import all_product from '../Components/Assets/all_product'

export const  ShopContext = createContext( null); 
const getDefaultCart =()=>{
    let cart ={};
    all_product.forEach((e)=>{
        cart[e.id] = 0;
    })
    return cart; 

}
 

const ShopContextProvider = (props)=>{


 const [cart, setCart] = useState(getDefaultCart()); 


    const getTotalCartAmount= ()=>{
        let totalAmount = 0;
         for(const item in cart){
             if(cart[item]>0){
                 let itemInfo = all_product.find((product)=>product.id===Number(item))
                 totalAmount += itemInfo.new_price* cart[item];
 
             }
             
         }
         return totalAmount.toFixed(2);
      } 
      const getTotalCartItems = ()=>{
         let totalItems = 0;
         for(const item in cart){
             if(cart[item]>0){
                 let itemInfo = all_product.find((product)=>product.id===Number(item))
                 totalItems += cart[item];
             }
            }
            return totalItems;

        }

            



  
   
    
     const addToCart = (id)=>{
         setCart({...cart,[id]:cart[id]+1})
     }  
     const removeFromCart = (id)=>{
         setCart({...cart,[id]:cart[id]-1})
     }
     const clearCart = ()=>{
         setCart(getDefaultCart())
     }

     const totalPrice = Object.values(cart).reduce((a,b)=>a+b,0) * 100;
    
     
     const totalItems = Object.values(cart).reduce((a,b)=>a+b,0);

    

     const contextValue ={  getTotalCartItems,getTotalCartAmount, all_product,cart,setCart,addToCart,removeFromCart,clearCart,totalPrice,totalItems};     
 
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

     

} 
export default ShopContextProvider;
