import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart,processOrder } from '../../utilities/databaseManager';
import Cart from '../cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyImage from '../../images/giphy.gif'


const Review = () => {
    
    const [cart , setCart ] = useState([]);
    const [orderPlace, setOrderPlace] = useState(false);

   const handleOrderPlace = () => {
      
        setCart ([]);
        setOrderPlace(true);
       processOrder();


   }


    const removeProduct = (productKey) => {
        console.log('remove clicked' , productKey);
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart)
        removeFromDatabaseCart(productKey)
    }


    useEffect(()=>{
      const savedCart = getDatabaseCart();
      const productKey = Object.keys(savedCart);
    const cartProduct = productKey.map(key =>{
 
        const product =fakeData.find(pd => pd.key ===key);
        product.quantity = savedCart[key];
        return product;
    }
      );
       setCart(cartProduct);

    },[])

    let thankyou;
    if(orderPlace){
        thankyou = <img src={happyImage} alt=""/>
    }

    return (
        <div className="shop-container">
            <div className= "products-container">
             <h4>Cart Item {cart.length}</h4>
              {
                cart.map(pd => <ReviewItem 
                    removeProduct= {removeProduct}
                    key={pd.key}
                    product ={pd} ></ReviewItem> )
            }
         {thankyou}
            </div>
            <div className="cart-container">
                   <Cart cart ={cart}>
                       <button onClick={handleOrderPlace} className="main-button">Place Order</button>
                   </Cart>


            </div>

        </div>
    );
};

export default Review;