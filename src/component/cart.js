import React from 'react';


function Cart() {
  return (
    <section id="cart" className="container">
      <h2>CART</h2>
      <button className="cancel">X</button>
      <div className="cart-row cart-header">
        <span className='cart-item cart-column'>ITEM</span>
        <span className='cart-price cart-column'>PRICE</span>
        <span className='cart-quantity cart-column'>QUANTITY</span>
      </div>
      <div className='cart-items'>

      </div>
      <div className="cart-total">
        <span>
          <span className='total-title'><strong>Total</strong></span>
          $<span id='total-value'>0</span>
        </span>
      </div>
      <button className='purchase-btn' type='button'>PURCHASE</button>
    <div>  <button class="cart-btn-bottom"> <a href="#cart" class="cart-bottom">See the cart</a></button>
</div>
    </section>
    
  );
}

export default Cart;
