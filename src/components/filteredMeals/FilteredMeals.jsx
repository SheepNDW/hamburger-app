import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import classes from './FilteredMeals.module.css';

const FilteredMeals = (props) => {
  const handleChange = (e) => {
    const keyword = e.target.value.trim();
    props.onFilter(keyword);
  };

  return (
    <div className={classes.filteredMeals}>
      <div className={classes.searchInputOuter}>
        <input
          type="text"
          placeholder="請輸入關鍵字"
          className={classes.searchInput}
          onChange={handleChange}
        />
        <FontAwesomeIcon icon={faSearch} className={classes.searchIcon} />
      </div>
    </div>
  );
};

export default FilteredMeals;
