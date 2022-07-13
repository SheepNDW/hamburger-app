import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import classes from './FilteredMeals.module.css';

const FilteredMeals = (props) => {
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    // 降低資料過濾次數, 提高使用者體驗 (使用者輸入完畢後再過濾)
    // 當使用者停止動作 1 秒後才進行查詢
    let timer;
    timer = setTimeout(() => {
      props.onFilter(keyword);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [keyword]);

  const handleChange = (e) => {
    setKeyword(e.target.value.trim());
    // props.onFilter(keyword);
  };

  return (
    <div className={classes.filteredMeals}>
      <div className={classes.searchInputOuter}>
        <input
          type="text"
          placeholder="請輸入關鍵字"
          className={classes.searchInput}
          onChange={handleChange}
          value={keyword}
        />
        <FontAwesomeIcon icon={faSearch} className={classes.searchIcon} />
      </div>
    </div>
  );
};

export default FilteredMeals;
