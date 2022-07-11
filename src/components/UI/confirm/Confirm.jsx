import React from 'react';
import Backdrop from '../backdrop/Backdrop';
import classes from './Confirm.module.css';

const Confirm = (props) => {
  return (
    <Backdrop
      className={classes.confirmOuter}
      onClick={(e) => props.onCancel(e)}
    >
      <div className={classes.confirm} onClick={(e) => e.stopPropagation()}>
        <p className={classes.confirmText}>{props.confirmText}</p>
        <div className={classes.buttonBox}>
          <button
            className={classes.cancelBtn}
            onClick={(e) => props.onCancel(e)}
          >
            取消
          </button>
          <button className={classes.confirmBtn} onClick={props.onOk}>
            確認
          </button>
        </div>
      </div>
    </Backdrop>
  );
};

export default Confirm;
