import React, { useContext, useState } from 'react';
import Backdrop from '../../UI/backdrop/Backdrop';
import Meal from '../../meals/meal/Meal';
import classes from './CartDetail.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

import CartContext from '../../../store/cartContext';
import Confirm from '../../UI/confirm/Confirm';

const CartDetail = (props) => {
  const ctx = useContext(CartContext);

  const [showConfirm, setShowConfirm] = useState(false);

  const handleShowConfirm = () => {
    setShowConfirm(true);
  };

  const handleCancel = (e) => {
    e.stopPropagation();
    setShowConfirm(false);
  };

  const handleOk = () => {
    ctx.clearCart();
    setShowConfirm(false);
    props.closeDetail();
  };

  return (
    <Backdrop>
      {showConfirm && (
        <Confirm
          confirmText={'確定要清空購物車嗎？'}
          onCancel={handleCancel}
          onOk={handleOk}
        />
      )}

      <div className={classes.cartDetails} onClick={(e) => e.stopPropagation()}>
        <header className={classes.header}>
          <h2 className={classes.title}>餐點明細</h2>
          <div className={classes.clear} onClick={handleShowConfirm}>
            <FontAwesomeIcon icon={faTrashAlt} />
            <span>清空購物車</span>
          </div>
        </header>

        <div className={classes.mealList}>
          {ctx.items.map((item) => {
            return <Meal noDesc key={item.id} meal={item} />;
          })}
        </div>
      </div>
    </Backdrop>
  );
};

export default CartDetail;
