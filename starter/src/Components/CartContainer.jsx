import React from "react";
import { useSelector} from "react-redux";
import CartItem from "./CartItem";

function CartContainer() {
  const { cartItems, total, amount } = useSelector((state) => state.cart);
  console.log(cartItems);
  if (amount < 1) {
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
        <h4 className="empty-cart">is currently empty</h4>
      </header>
    </section>;
  }
  return (
    <div>
      <section className="Cart">
        <h2>Your Bag</h2>
      </section>
      <div>
        {
          cartItems.map((item)=>{
            return <CartItem  EachCartItem ={item.id} {...item} />
          })
        }
      </div>
      <footer>
        <div className="cart-total">
          <h4>Total <span>{total}</span> </h4>
        </div>
        <button className='btn clear-btn'>Clear cart</button>
      </footer>
    </div>
  );
}

export default CartContainer;
