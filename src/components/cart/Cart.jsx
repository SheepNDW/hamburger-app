import React, { useContext, useEffect, useState } from 'react';
import classes from './Cart.module.css';
import iconImg from '../../assets/bag.png';

import CartContext from '../../store/cartContext';
import CartDetail from './cartDetail/CartDetail';
import Checkout from './checkout/Checkout';

const Cart = () => {
  const ctx = useContext(CartContext);

  const [showDetails, setShowDetails] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  /*
   * 在元件每次重新渲染時, 檢查一下購物車中餐點的總數, 如果數量為零, 則修改 showDetails 為 false
   * 元件每次重新渲染, 元件的函式就會執行, 所以下方程式碼會造成 Uncaught Error: Too many re-renders.
   * if (ctx.totalAmount === 0) {
   *   setShowDetails(false);
   * }
   * 應該將邏輯寫入 useEffect
   */
  useEffect(() => {
    if (ctx.totalAmount === 0) {
      // 購物車被清空時
      setShowDetails(false);
      setShowCheckout(false);
    }
  }, [ctx]);

  const toggleDetails = () => {
    if (ctx.totalAmount === 0) return setShowDetails(false);
    setShowDetails(!showDetails);
  };

  const handleShowCheckout = () => {
    if (ctx.totalAmount === 0) return;
    setShowCheckout(true);
  };

  const handleHideCheckout = () => {
    setShowCheckout(false);
  };

  return (
    <div className={classes.cart} onClick={toggleDetails}>
      {showCheckout && <Checkout onHide={handleHideCheckout} />}

      {/* 購物車詳情 */}
      {showDetails && <CartDetail />}

      <div className={classes.cart__icon}>
        <img src={iconImg} alt="cart icon" />
        {ctx.totalAmount === 0 ? null : (
          <span className={classes.cart__totalAmount}>{ctx.totalAmount}</span>
        )}
      </div>

      {ctx.totalAmount === 0 ? (
        <p className={classes.cart__noMeal}>您還未選購任何餐點</p>
      ) : (
        <p className={classes.cart__price}>{ctx.totalPrice}</p>
      )}

      <button
        onClick={handleShowCheckout}
        className={`${classes.cart__button} ${
          ctx.totalAmount === 0 ? classes.disabled : ''
        }`}
      >
        去結帳
      </button>
    </div>
  );
};

export default Cart;
