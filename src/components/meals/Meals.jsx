import React from 'react';
import Meal from './meal/Meal';

import classes from './Meals.module.css';

/**
 * 食物列表的元件
 */
const Meals = (props) => {
  return (
    // 把溢出卷軸 (overflow) 設置給 meals
    <div className={classes.meals}>
      {props.mealsData.map((item) => {
        return <Meal key={item.id} meal={item} />;
      })}
    </div>
  );
};

export default Meals;
