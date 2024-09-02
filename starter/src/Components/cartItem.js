const CartItem = ({ id, title, price, amount, img }) => {
  return (
    <>
      <div className='cart-item'>
        <img src={img} alt={title} />
        <div>
          <h4>{title}</h4>
          <h4 className="item-price">${price}</h4>
          <button className="remove-btn">Remove</button>
        </div>
      </div>

    </>

  )
}
export default CartItem;