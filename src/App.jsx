import { useState, useReducer } from 'react';
import Meals from './components/meals/Meals';
import FilteredMeals from './components/filteredMeals/FilteredMeals';
import Cart from './components/cart/Cart';

import CartContext from './store/cartContext';

// 模擬一組食物資料
const MEALS_DATA = [
  {
    id: '1',
    title: '漢堡',
    desc: '100%純牛肉，僅用少許鹽和胡椒調味，香濃口味讓人難以忘懷。',
    price: 30,
    img: '/meals/1.png',
  },
  {
    id: '2',
    title: '雙層牛肉吉事堡',
    desc: '雙層100%純牛肉，搭配雙層切達吉事片，層出不窮的經典滋味。',
    price: 65,
    img: '/meals/2.png',
  },
  {
    id: '3',
    title: '大麥克',
    desc: '100%雙層純牛肉，淋上大麥克招牌醬料，美味層層堆疊，口感樂趣無窮。',
    price: 75,
    img: '/meals/3.png',
  },
  {
    id: '4',
    title: '勁辣雞腿堡',
    desc: '整塊勁辣雞腿排，未吃份量先得分。滿滿生菜搭配特製美乃滋，口感豐富多層次。',
    price: 75,
    img: '/meals/4.png',
  },
  {
    id: '5',
    title: '板烤雞腿堡',
    desc: '獨特的BBQ風味醬，搭配多汁去骨雞腿肉，以慢火嫩煎入味，意料之外的絕配。',
    price: 89,
    img: '/meals/5.png',
  },
  {
    id: '6',
    title: '麥香雞',
    desc: '清脆爽口新鮮生菜，優質麥香雞排，淋上特製醬料，通通夾進芝麻麵包，熟悉的經典美味。',
    price: 45,
    img: '/meals/6.png',
  },
  {
    id: '7',
    title: '吉事漢堡',
    desc: '100%紐澳牛肉，僅用少許鹽和胡椒調味，覆蓋上香濃巧達吉事片，夾在一級小麥特製麵包裡。',
    price: 39,
    img: '/meals/7.png',
  },
];

const cartReducer = (prevState, action) => {
  const newCart = { ...prevState };

  switch (action.type) {
    case 'addCart':
      // 判斷目前購物車裡是否存在相同品項
      if (newCart.items.indexOf(action.meal) === -1) {
        // 新增至購物車中
        newCart.items.push(action.meal);
        action.meal.amount = 1;
      } else {
        // 數量增加
        action.meal.amount += 1;
      }
      newCart.totalAmount += 1;
      newCart.totalPrice += action.meal.price;
      return newCart;

    case 'removeCart':
      // 減少品項數量
      action.meal.amount -= 1;
      // 檢查是否歸 0
      if (action.meal.amount === 0) {
        newCart.items.splice(newCart.items.indexOf(action.meal), 1);
      }

      newCart.totalAmount -= 1;
      newCart.totalPrice -= action.meal.price;
      return newCart;

    case 'clearCart':
      // 將購物車中品項的數量清零
      newCart.items.forEach((item) => delete item.amount);
      newCart.items = [];
      newCart.totalAmount = 0;
      newCart.totalPrice = 0;
      return newCart;

    default:
      return prevState;
  }
};

function App() {
  const [mealsData, setMealsData] = useState(MEALS_DATA);

  // 將 cartData 改寫成 useReducer
  const [cartData, cartDispatch] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
    totalPrice: 0,
  });

  const getFilteredMeals = (keyword) => {
    const newMealsData = MEALS_DATA.filter(
      (item) => item.title.indexOf(keyword) !== -1
    );
    setMealsData(newMealsData);
  };

  return (
    <CartContext.Provider value={{ ...cartData, cartDispatch }}>
      <div>
        <FilteredMeals onFilter={getFilteredMeals} />
        <Meals mealsData={mealsData} />
        <Cart />
      </div>
    </CartContext.Provider>
  );
}

export default App;
