import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  totalPrice: 0,
  cartDispatch: () => {},
  // addItem: () => {},
  // removeItem: () => {},
  // clearCart: () => {},
});

export default CartContext;
