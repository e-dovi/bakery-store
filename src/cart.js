import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  removeCakeFromCart,
  clearCart,
  selectCartItems,
  selectCartTotal,
} from './reducers/cartSlice';

import {
 // Card,
  Button,
  Price,
  CakeName,
  ToppingButton,
  //ScrollArea,
  CartScroll
} from './style.js';
import { motion } from 'framer-motion';


const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  return (
    <motion.div
    className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      flexDirection: 'column',
      margin: '2rem auto',
      paddingTop: '1rem',
      paddingBottom: '2rem',
      minHeight: 'auto',
    }}
  >
    {/* ...rest of your Cart component... */}

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>
    🛒 Your Cart
  </h2>
  <CartScroll className="h-[500px] pr-4" style={{ width: '100%', boxSizing: 'border-box' }}>
  
  {cart.length === 0 ? (
    <p style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>Your cart is empty</p>
  ) : (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid #e5e7eb',
            paddingBottom: '0.5rem',
          }}
        >
          <div>
            <CakeName>{item.name}</CakeName>
            <Price>${item.price.toFixed(2)}</Price>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <ToppingButton onClick={() => dispatch(decrementQuantity(item.id))}>–</ToppingButton>
            <span style={{ minWidth: '1.5rem', textAlign: 'center' }}>{item.quantity}</span>
            <ToppingButton onClick={() => dispatch(incrementQuantity(item.id))}>+</ToppingButton>
            <ToppingButton onClick={() => dispatch(removeCakeFromCart(item.id))}>🗑</ToppingButton>
          </div>
        </div>
      ))}

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingTop: '1rem',
          fontWeight: 600,
        }}
      >
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <Button style={{ width: '100%', marginTop: '1rem' }}>Proceed to Checkout</Button>
      <Button
        style={{ width: '100%', backgroundColor: '#f43f5e' }}
        onClick={() => dispatch(clearCart())}
      >
        Clear Cart
      </Button>
    </div>
  )}

</CartScroll>
</div>

  </motion.div>

  );
};

export default Cart;
