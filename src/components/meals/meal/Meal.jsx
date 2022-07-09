import React from 'react';
import Counter from '../../UI/counter/Counter';
import classes from './Meal.module.css';

/**
 * 食物元件
 */
const Meal = (props) => {
  return (
    <div className={classes.meal}>
      <div className={classes.meal__imgBox}>
        <img src={props.meal.img} alt={props.meal.title} />
      </div>
      <div>
        <h2 className={classes.meal__title}>{props.meal.title}</h2>
        <p className={classes.meal__desc}>{props.meal.desc}</p>
        <div className={classes.meal__priceBox}>
          <span className={classes.meal__price}>{props.meal.price}</span>
          <Counter meal={props.meal} />
        </div>
      </div>
    </div>
  );
};

export default Meal;
